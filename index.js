const SlackBot = require('slackbots');
const CronJob = require('cron').CronJob;
require('dotenv').config()



const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'ALTRAN/AMA'
});

// Start Handler
bot.on('start', () => {
    bot.postMessageToChannel(
        'test-bot',
        'Rodando no heroku @ysouzas',
    );

    new CronJob('00 00 09 * * *', () => {
        bot.postMessageToChannel(
            'test-bot',
            'Bom Dia Malta',
        );
    }, null, true, 'Europe/Lisbon');

    new CronJob('00 00 14 * * *', () => {
        bot.postMessageToChannel(
            'test-bot',
            'Boa Tarde Malta',
        );
    }, null, true, 'Europe/Lisbon');

    new CronJob('00 00 19 * * *', () => {
        bot.postMessageToChannel(
            'test-bot',
            'Boa Noite Malta',
        );
    }, null, true, 'Europe/Lisbon');
});





