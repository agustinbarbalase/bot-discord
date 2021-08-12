# bot-discord

## Description

This is a Discord bot written on JavaScript. It have two global commands: ```ping.js``` and ```dolar.js```. Both are in ```src/commands```. 

To test these commands with my bot, invite it on your server by clicking [here](https://discord.com/oauth2/authorize?client_id=700816981489614869&scope=bot+applications.commands&permissions=8) or setting it with [configuration instructions](#configuration-instructions) and [deploying this bot on Heroku](#deploy-on-heroku).

To create your own commands. See the section [Command Configuration](#command-configuration).

## Resources

This app has been made with [Discord.js](https://discord.js.org/#/) and based on [Discord.js Guide](https://discordjs.guide/) and here are other libraries and resources:

* [@discordjs/rest](https://www.npmjs.com/package/@discordjs/rest)
* [discord-api-types](https://www.npmjs.com/package/discord-api-types)
* [husky](https://www.npmjs.com/package/husky)
* [eslint](https://www.npmjs.com/package/eslint)
* [prettier](https://www.npmjs.com/package/prettier)
* [commitlint](https://www.npmjs.com/package/@commitlint/cli)

## Configuration instructions

Clone repository

```
git clone https://github.com/agustinbarbalase/bot-discord.git
```

Create your bot [here](https://discord.com/developers/applications) and follow the instructions [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot). Then, add your bot on your server with the following URL, DON'T FORGET COPY AND PASTE THE CLIENT ID

```
https://discord.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot+applications.commands
```

Create a ```.env``` file on your repository with the following options:

```
DISCORD_TOKEN=your-token-gone-here
DISCORD_CLIENT_ID=your-client_id-gone-here
DISCORD_GUILD_ID=your-guild_id-gone-here (Optional)
```

## Installation instructions

### Production

```shell
npm install
npm start
```

### Dev

```shell
npm install
npm run dev
```

## Command Configuration

For these steps, you must add in your ```.env``` file the following option:

```
DISCORD_GUILD_ID=your-guild_id-gone-here
```

These commands are still executed, if you keep the execution on your computer or deployment. These commands will not work if you configure my bot on your server and follow the following steps.

If you want deploy this bot on Heroku. Check the section [Deploy on Heroku](#deploy-on-heroku)

Once you clone and configure this repo on your computer or deploy it. You can configure the commands on your server.

First, create a command in your repo. The command should be on ```src/commands```. The format of your commands should be:

```js
module.exports = {
  name: 'your-name-command',
  description: 'your-description-command',
  async execute(interaction) {
    // command execution 
  }
}
```

And then, you must execute the command:

```shell
node ./src/api/putAplicationGuildCommands.js
```

### Global commands

If you clone the repo and you want to deploy your own bot on Discord, and you want all your commands on all servers, then you must run the following command and wait 1 hour:

```shell
node ./src/api/putAplicationCommands.js
```

For deployment. Check the section [Deploy on Heroku](#deploy-on-heroku), if you want to deploy on Heroku.

## Deploy on Heroku

This application was deployed in [Heroku](https://www.heroku.com/) with Github actions. To test my bot on your server with global commands, click [here](https://discord.com/oauth2/authorize?client_id=700816981489614869&scope=bot+applications.commands&permissions=8) or use the following action to deploy your own bot on Heroku:  

```yml
name: Deploy bot to Heroku

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: ${{ secrets.HEROKU_APP_NAME }}
          heroku_email: ${{ secrets.HEROKU_EMAIL }}
          procfile: 'worker: npm start'
        env:
          HD_DISCORD_TOKEN: ${{ secrets.DISCORD_TOKEN }}
          HD_DISCORD_CLIENT_ID: ${{ secrets.DISCORD_CLIENT_ID }}
```

## License

This app has an [MIT License](https://opensource.org/licenses/MIT)