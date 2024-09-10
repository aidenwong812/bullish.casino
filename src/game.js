async function handleGame(bot, msg) {
  const chatId = msg.chat.id;
  const username = msg.chat.username;

  const buttons = [
    [{ text: 'Play', web_app: { url: 'https://bullish.casino/' } }],
  ];

  const text = `Welcome @${username}\n`

  bot.sendMessage(chatId, text, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: buttons,
    }
  }
  )
}

module.exports = {
  handleGame,
};