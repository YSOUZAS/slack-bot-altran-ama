exports.enviaMensagem = async (bot, message, user, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    `${message}, ${user.profile.real_name_normalized}`
  );
};
