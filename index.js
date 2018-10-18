const SlackBot = require('slackbots');
const CronJob = require('cron').CronJob;
const messageService = require('./Services/message-service');

require('dotenv').config();

const bot = new SlackBot({
  token: process.env.SLACK_TOKEN,
  name: 'ALTRAN/AMA'
});

// Start Handler
bot.on('start', async () => {
  bot.postMessageToChannel('test-bot', `To Vivão`);
});

/**bot.on('start', async () => {
    bot.postMessageToChannel('test-bot', `<@UD68YKDCY> e ai?`);
  });
  
  bot.on('message', async data => {
    console.log(data);
  });
   */

bot.on('message', async data => {
  if (data.type == 'message') {
    const user = await bot.getUserById(data.user);
    const channel = await bot.getChannelById(data.channel);

    if (user) {
      const message = data.text;
      messageService.identificaMensagem(bot, message, user, channel);
    }
  }
});
