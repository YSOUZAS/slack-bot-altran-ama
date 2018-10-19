exports.enviaMensagemCoracao = async (bot, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    'Meu Coração pode ser encontrado aqui https://github.com/YSOUZAS/slack-bot-altran-ama',
  );
};

exports.enviaMensagemPai = async (bot, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    'Meu pai é o <@UD68YKDCY>',
  );
};
