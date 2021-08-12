module.exports = {
  name: 'ping',
  description: 'Play ping-pong with bot',
  async execute(interaction) {
    await interaction.reply('Pong');
  }
};
