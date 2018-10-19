const SlackBot = require('slackbots');
const CronJob = require('cron').CronJob;
const messageService = require('./Services/message-service');
const notificationService = require('./Services/notification-service');

const { version } = require('./package.json');

require('dotenv').config();

const bot = new SlackBot({
  token: process.env.SLACK_TOKEN,
  name: 'ALTRAN/AMA'
});

// Start Handler
bot.on('start', async () => {
  if (process.env.NODE_ENV !== 'production')
    bot.postMessageToChannel('test-bot', `To Vivão`);
  if (process.env.NODE_ENV === 'production')
    bot.postMessageToChannel(
      'general',
      `Malta, agora estou na versÃ£o ${version}`
    );
});

bot.on('message', async data => {


  if (data.type == 'message') {
    const user = await bot.getUserById(data.user);
    const channel = await bot.getChannelById(data.channel);

    if (user) {
      const message = data.text;
      messageService.identificaMensagem(bot, message, user, channel);
    }
  }



  if (data.type == 'desktop_notification') {
    const channel = await bot.getChannelById(data.channel);
    const message = data.content;
    notificationService.identificaNotification(bot, message, channel);

  }
});
