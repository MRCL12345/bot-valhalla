const { BOT } = require("../../../config");
module.exports = {
  name: "clear",
  desc: "clear 99 messages",
  usage: "clear",
  aliases: [],
  isPrivate: false,
  guildOnly: false,
  category: "test",
  isOwner: true,
  run: (client, msg, args) => {
    // !--------- CHANNELS
    const logs = client.channels.cache.find(
      (channel) => channel.id === BOT.logs_id
    );
    const basiclogs = client.channels.cache.find(
      (channel) => channel.id === BOT.basic_logs_id
    );
    // !---- PERMISOSS
    if (msg.member.roles.cache.find((rol) => rol.id === BOT.permisos_mod_id)) {
      if (msg.channel.id != basiclogs) {
        if (msg.channel.id != logs) {
          // ! -------- ACTION
          msg.channel.bulkDelete(99);
          // ! ------ LOGS
          logs.send(
            `
        Autor: ${msg.author}
        Uses-Command: "-clear"
        In: #${msg.channel}
        `
          );
          console.log(`
        Autor: ${msg.author}
        Uses-Command: "-clear"
        In: #${msg.channel}
        `);
        } else
          return (
            msg.reply("No puedes usar el comando en este canal"),
            logs.send(`
    Autor: ${msg.author}
    Intent-Use-Command: "-clear" In ${msg.channel}
    `)
          );
      } else
        return (
          msg.reply("No puedes usar el comando en este canal"),
          logs.send(`
    Autor: ${msg.author}
    Intent-Use-Command: "-clear" In ${msg.channel}
    `)
        );
    } else msg.reply("No tienes permisos para usar este comando");
  },
};
