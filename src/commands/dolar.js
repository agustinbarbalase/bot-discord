const { MessageEmbed } = require('discord.js');
const getDolar = require('../services/getDolar');

module.exports = {
  name: 'dolar',
  description: 'Get dolar price',
  async execute(interaction) {
    const fields = await getDolar();

    const messageEmbed = new MessageEmbed()
      .setTitle('Dolar')
      .setColor('#00FF00')
      .addFields(fields);

    interaction.reply({
      embeds: [messageEmbed]
    });
  }
};