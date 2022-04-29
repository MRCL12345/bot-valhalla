const { BOT } = require("../../../config");
const { Interaction, MessageEmbed } = require("discord.js");
module.exports = {
  name: "instrucciones",
  description: "instrucciones msg",
  /**
   * @param {Interaction} interaction
   */
  ejecutar: (client, interaction) => {
    const instruction = new MessageEmbed()
      .setColor("#FF2D2D")
      .setAuthor("Valhalla System")
      .setDescription("instrucciones");
    if (
      interaction.member.roles.cache.find((rol) => rol.id === BOT.permisos_id)
    ) {
      interaction.channel.send({ embeds: [instruction] });
      interaction.reply("Message Instructions Updated");
      interaction.deleteReply();
    }
  },
};
