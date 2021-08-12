const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { token } = require('./config.js');

client.commands = new Collection();

const commandFiles = fs
  .readdirSync('src/commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (!client.commands.has(interaction.commandName)) return;

  try {
    await client.commands.get(interaction.commandName).execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

const login = () => {
  client.login(token);
};

module.exports = login;