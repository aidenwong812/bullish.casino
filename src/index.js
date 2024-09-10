const TelegramBot = require('node-telegram-bot-api');
const { TOKEN } = require('./config.js');
const { handleGame } = require('./game.js');

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', async msg => {
  try {    
    const { text } = msg;
    const COMMANDS = text.toUpperCase();
    
    if (!text) return;

    switch (COMMANDS) {
      case '/START':
        handleGame(bot, msg);
        break;
      default:
    }
  } catch (err) {
    console.error(err);
  }
})
