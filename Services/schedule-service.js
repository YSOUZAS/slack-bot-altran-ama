const CronJob = require('cron').CronJob;

exports.agendaSextaNoite = async bot => {
  new CronJob(
    '00 30 17 * * 5',
    async () => {
      await bot.postMessageToChannel(
        'random',
        '<!here|here> Trabalhamos muito essa semana não? onde será nosso happy hour?'
      );
    },
    null,
    true,
    'Europe/London'
  );
};

exports.agendaPequenoAlmoco = async bot => {
  new CronJob(
    '00 00 10 * * 1-5',
    async () => {
      await bot.postMessageToChannel(
        'random',
        '<!here|here> Que tal um pequeno almoço para começar bem o dia?'
      );
    },
    null,
    true,
    'Europe/London'
  );
};

exports.agendaAlmoco = async bot => {
  new CronJob(
    '00 00 12 * * 1-5',
    async () => {
      await bot.postMessageToChannel(
        'random',
        '<!here|here> Malta, Vamos almoçar?'
      );
    },
    null,
    true,
    'Europe/London'
  );
};

exports.agendaLancheDaTarde = async bot => {
  new CronJob(
    '00 00 16 * * 1-5',
    async () => {
      await bot.postMessageToChannel(
        'random',
        '<!here|here> Malta, Vamos Lanchar?'
      );
    },
    null,
    true,
    'Europe/London'
  );
};

exports.agendaTchau = async bot => {
  new CronJob(
    '00 00 18 * * 1-5',
    async () => {
      await bot.postMessageToChannel(
        'random',
        '<!here|here> Malta, Estou indo nessa, até amanhã.'
      );
    },
    null,
    true,
    'Europe/London'
  );
};
