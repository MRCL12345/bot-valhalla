const { Message } = require("discord.js");
const { BOT } = require("../../../config");
module.exports = {
  name: "mute",
  description: "mutea",
  /**
   * @param {Client} client
   * @param {Message} msg
   */
  run: (client, msg, args) => {
    // ! CANALES
    const logs = client.channels.cache.find(
      (channel) => channel.id === BOT.logs_id
    );
    //! CONSTANTE
    const member = msg.mentions.members.first();
    //! PERMISOS
    if (msg.member.roles.cache.find((rol) => rol.id === BOT.permisos_mod_id)) {
      if (!member.roles.cache.find((role) => role.id === BOT.permisos_mod_id)) {
        member.roles.add(BOT.mute);
        logs.send(`${msg.author} silencio a ${member.user}`);
        msg.reply("Usuario Silenciado");
      } else {
        msg.reply("Este usuario no puede ser silenciado");
        logs.send(`${msg.author} intento silenciar a ${member.user}`);
      }
    } else msg.reply("No tienes permisos para usar este comando");
  },
};
