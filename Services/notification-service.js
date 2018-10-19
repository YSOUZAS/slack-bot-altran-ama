const notificationController = require('../Controllers/notification-controller');

exports.identificaNotification = async (bot, message, channel) => {
  if (message.toLowerCase().includes('quem é seu pai')) {
    notificationController.enviaMensagemPai(bot, channel);
  }
  if (message.toLowerCase().includes('me mostre seu coração')) {
    notificationController.enviaMensagemCoracao(bot, channel);
  }
};
