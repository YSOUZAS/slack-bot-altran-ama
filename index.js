const SlackBot = require('slackbots');
const CronJob = require('cron').CronJob;
require('dotenv').config()



const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'ALTRAN/AMA'
});

// Start Handler
bot.on('start', async () => {

    bot.postMessageToChannel("test-bot", `to na area`)
});

bot.on('message', async data => {
    if (data.type !== 'message') {
        return;
    }

    const user = await bot.getUserById(data.user);
    const channel = await bot.getChannelById(data.channel);

    if (user) {
        console.log(channel)
        console.log(user.profile.real_name_normalized);
        const message = data.text;

        if (message.toLowerCase().includes('boa noite'))
            bot.postMessageToChannel(channel.name, `Boa Noite, ${user.profile.real_name_normalized}`)
        if (message.toLowerCase().includes('bom dia'))
            bot.postMessageToChannel(channel.name, `Bom Dia, ${user.profile.real_name_normalized}`)
        if (message.toLowerCase().includes('boa tarde'))
            bot.postMessageToChannel(channel.name, `Boa Tarde, ${user.profile.real_name_normalized}`)
    }
});