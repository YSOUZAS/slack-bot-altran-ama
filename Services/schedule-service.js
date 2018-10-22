const CronJob = require('cron').CronJob;

exports.agendaSextaNoite = async (bot) => {
  new CronJob(
    '00 30 17 * * 5',
    async () => {
      await bot.postMessageToChannel(
        'random',
        '<!here|here> Trabalhamos muito essa semana não? onde será nosso happy hour?',
      );
      console.log('You will see this message every second');
    },
    null,
    true,
    'Europe/London',
  );
};

exports.agendaPequenoAlmoco = async (bot) => {
  new CronJob(
    '00 00 10 * * 1-5',
    async () => {
      await bot.postMessageToChannel(
        'random',
        '<!here|here> Que tal um pequeno almoço para começar bem o dia?',
      );
      console.log('You will see this message every second');
    },
    null,
    true,
    'Europe/London',
  );
};

exports.agendaAlmoco = async (bot) => {
  new CronJob(
    '00 00 12 * * 1-5',
    async () => {
      await bot.postMessageToChannel(
        'random',
        '<!here|here> Malta, Vamos almoçar?',
      );
      console.log('You will see this message every second');
    },
    null,
    true,
    'Europe/London',
  );
};
