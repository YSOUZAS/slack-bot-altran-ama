/**
 * Send the message to channel.
 * @param  {object} bot - the instance of slack's bot.
 * @param  {object} message - The message that will be sent.
 * @param  {object} user - The user that will receive the message.
 * @param  {object} channel - The channel where the message will send.
 */

exports.enviaMensagem = async (bot, message, user, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    `${message}, ${user.profile.real_name_normalized}`
  );
};
