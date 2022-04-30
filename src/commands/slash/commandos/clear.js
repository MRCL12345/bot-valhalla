const { BOT } = require("../../../config");
module.exports = {
  name: "clear",
  description: "clear 99 messages",
  ejecutar: (client, interaction, args) => {
    // !---- PERMISOSS
      interaction.channel.bulkDelete(99);
      interaction.reply("Mensajes Borrados");
      interaction.deleteReply();
  },
};
