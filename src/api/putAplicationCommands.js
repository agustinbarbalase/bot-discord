const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

const { token, clientId } = require('../config');

const rest = new REST({ version: '9' }).setToken(token);

const commands = [];

const commandFiles = fs
  .readdirSync('src/commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command);
}

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
