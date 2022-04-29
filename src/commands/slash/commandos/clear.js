const { BOT } = require("../../../config");
module.exports = {
  name: "clear",
  description: "clear 99 messages",
  ejecutar: (client, interaction, args) => {
    // !---- PERMISOSS
    if (
      interaction.member.roles.cache.find((rol) => rol.id === BOT.permisos_id)
    ) {
      interaction.channel.bulkDelete(99);
      interaction.reply("Mensajes Borrados");
      interaction.deleteReply();
    } else interaction.reply("No tienes permisos para usar este comando");
  },
};
