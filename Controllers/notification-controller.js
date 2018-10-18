exports.enviaMensagemCoracao = async (bot, user, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    `<@${
      user.id
    }>, meu coração pode ser encontrado aqui https://github.com/YSOUZAS/slack-bot-altran-ama `
  );
};

exports.enviaMensagemPai = async (bot, user, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    `<@${user.id}>, meu pai é o <@UD68YKDCY>`
  );
};
