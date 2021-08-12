const { config } = require('dotenv');
config();

module.exports = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.DISCORD_CLIENT_ID,
};
