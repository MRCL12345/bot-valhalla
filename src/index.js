const { Client, Intents, Collection } = require("discord.js");
require("dotenv").config();
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});
const { BOT } = require("./config");
const fs = require("fs");
const path = require("path");
client.commands = new Collection();
client.slashcommands = new Collection();
//---------------CODE-----------------------

const events = fs.readdirSync(path.join(__dirname, "events"));
for (const file of events) {
  const event = require(path.join(__dirname, "events", file));
  client.on(event.name, (...args) => event.run(client, ...args));
}
//--

const commands = fs.readdirSync(path.join(__dirname, "commands/cmd"));
for (const folders of commands) {
  const folder = fs.readdirSync(path.join(__dirname, "commands/cmd", folders));
  for (const file of folder) {
    const cmd = require(path.join(__dirname, "commands/cmd", folders, file));
    client.commands.set(cmd.name, cmd);
  }
}
//...
const slashcommands = fs.readdirSync(path.join(__dirname, "commands/slash"));
for (const folders of slashcommands) {
  const folder = fs.readdirSync(
    path.join(__dirname, "commands/slash", folders)
  );
  for (const file of folder) {
    const slash = require(path.join(
      __dirname,
      "commands/slash",
      folders,
      file
    ));
    client.slashcommands.set(slash.name, slash);
  }
}
client.login(BOT.token);

/*npm run dev */
