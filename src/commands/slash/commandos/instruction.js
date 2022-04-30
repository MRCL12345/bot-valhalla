const { BOT } = require("../../../config");
const { Interaction, MessageEmbed } = require("discord.js");
module.exports = {
  name: "instrucciones",
  description: "instrucciones msg",
  /**
   * @param {Interaction} interaction
   */
  ejecutar: (client, interaction) => {
    let group = "``Roblox Group:``";
    let youtube = "``Youtube:``";
    let discord = "``Discord:``";
    let codex = "``Codex:``";
    const instruction = new MessageEmbed()
      .setColor("#FF2D2D")
      .setAuthor("Valhalla System")
      .setTitle("Welcome To Valhalla")
      .setDescription(
        "Spanish and English clan dedicated to fighting other clans and focused on having fun, read the rules so you don't have any problems **#rules**"
      )
      .setFields(
        {
          name: "Information",
          value: `
        ${group}
        ${youtube}
        ${discord}
        ${codex}
        `,
          inline: true,
        },
        {
          name: "Value",
          value: `
        ${BOT.group}
        ${BOT.youtube}
        ${BOT.discord}
        ${BOT.codex}
        `,
          inline: true,
        }
      );
    if (
      interaction.member.roles.cache.find((rol) => rol.id === BOT.permisos_id)
    ) {
      interaction.channel.send({ embeds: [instruction] });
      interaction.reply("Message Instructions Updated");
      interaction.deleteReply();
    }
  },
};
