exports.enviaMensagemCoracao = async (bot, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    'Meu Coração pode ser encontrado aqui https://github.com/YSOUZAS/slack-bot-altran-ama'
  );
};

exports.enviaMensagemPai = async (bot, channel) => {
  await bot.postMessageToChannel(channel.name, 'Meu pai é o <@UD68YKDCY>');
};
exports.enviaMensagemSangue = async (bot, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    'Meu sangue é Javascript, mas meu sistema nervoso é NodeJS, para saber mais sobre isso acesse  https://nodejs.org/en/'
  );
};
