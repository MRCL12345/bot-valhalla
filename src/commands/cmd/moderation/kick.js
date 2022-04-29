const { Message } = require("discord.js");
const { BOT } = require("../../../config");
module.exports = {
  name: "kick",
  description: "expulsa",
  /**
   * @param {Client} client
   * @param {Message} msg
   */
  run: (client, msg, args) => {
    // !--------- CHANNELS
    const logs = client.channels.cache.find(
      (channel) => channel.id === BOT.logs_id
    );
    const basiclogs = client.channels.cache.find(
      (channel) => channel.id === BOT.basic_logs_id
    );
    //! CONSTANTE
    const member = msg.mentions.members.first();
    //! PERMISOS
    if (msg.member.roles.cache.find((rol) => rol.id === BOT.permisos_mod_id)) {
      if (!member.roles.cache.find((role) => role.id === BOT.permisos_mod_id)) {
        msg.guild.members.kick(member);
        msg.reply(`${member.user} fue expulsado`);
        logs.send(`${member.user} fue expulsado por ${msg.author}`);
        basiclogs.send(`${member.user} fue expulsado`);
      } else {
        msg.reply("Este usuario no puede ser expulsado");
        logs.send(`${msg.author} intento expulsar a ${member.user}`);
      }
    } else msg.reply("No tienes permisos para usar este comando");
  },
};
