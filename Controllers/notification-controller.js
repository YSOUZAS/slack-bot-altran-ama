/**
 * Send the message to channel.
 * @param {object} bot - the instance of slack's bot.
 * @param {object} channel - The channel where the message will send.
 */

exports.enviaMensagemCoracao = async (bot, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    'Meu Coração pode ser encontrado aqui https://github.com/YSOUZAS/slack-bot-altran-ama',
  );
};

/**
* Send the message to channel.
* @param  {object} bot - the instance of slack's bot.
* @param  {object} channel - The channel where the message will send.
*/

exports.enviaMensagemPai = async (bot, channel) => {
  await bot.postMessageToChannel(channel.name, 'Meu pai é o <@UD68YKDCY>');
};

/**
* Send the message to channel.
* @param  {object} bot - the instance of slack's bot.
* @param  {object} channel - The channel where the message will send.
*/

exports.enviaMensagemSangue = async (bot, channel) => {
  await bot.postMessageToChannel(
    channel.name,
    'Meu sangue é Javascript, mas meu sistema nervoso é NodeJS, para saber mais sobre isso acesse  https://nodejs.org/en/',
  );
};
