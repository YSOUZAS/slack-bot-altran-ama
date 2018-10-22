const messageController = require('../Controllers/message-controller');

exports.identificaMensagem = async (bot, message, user, channel) => {
  if (message.toLowerCase().includes('bom dia')) {
    messageController.enviaMensagem(bot, 'Bom dia', user, channel);
  }

  if (message.toLowerCase().includes('boa tarde')) {
    messageController.enviaMensagem(bot, 'Boa tarde', user, channel);
  }

  if (message.toLowerCase().includes('boa noite')) {
    messageController.enviaMensagem(bot, 'Boa noite', user, channel);
  }
  if (message.toLowerCase().includes('Bom fim-de-semana') || message.toLowerCase().includes('Bom fim de semana')) {
    messageController.enviaMensagem(bot, 'Bom fim de semana', user, channel);
  }
};
