const messageController = require('../Controllers/message-controller');
const notificationController = require('../Controllers/notification-controller');

exports.identificaMensagem = async (bot, message, user, channel) => {
  if (message.toLowerCase().includes('boa noite'))
    messageController.enviaMensagem(bot, 'Boa noite', user, channel);

  if (message.toLowerCase().includes('bom dia'))
    messageController.enviaMensagem(bot, 'Bom dia', user, channel);

  if (message.toLowerCase().includes('boa tarde'))
    messageController.enviaMensagem(bot, 'Boa tarde', user, channel);

  if (message.toLowerCase().includes('me mostre seu coração')) {
    notificationController.enviaMensagemCoracao(bot, user, channel);
  }

  if (message.toLowerCase().includes('quem é seu pai')) {
    notificationController.enviaMensagemPai(bot, user, channel);
  }
};
