const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN; // Токен из скрытого файла .env
const bot = new TelegramBot(token, {polling: true});

// Команда /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '✨ Я бот для обмена Stars! Напишите /help.');
});

// Ответ на "привет"
bot.on('message', (msg) => {
  if (msg.text.toLowerCase().includes('привет')) {
    bot.sendMessage(msg.chat.id, 'И тебе привет! 😊');
  }
});
