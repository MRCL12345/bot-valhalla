const { BOT } = require("../../../config");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction } = require("discord.js");
module.exports = {
  ...new SlashCommandBuilder()
    .setName("ban")
    .setDescription("descripcion")
    .addUserOption((option) =>
      option.setName("member").setDescription("banea").setRequired(true)
    ),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  ejecutar: (client, interaction) => {
    const member = interaction.options.getMember("member");
      if (!member.roles.cache.find((role) => role.id === BOT.permisos_id)) {
        interaction.guild.members.ban(member);
        interaction.reply(`${member.user} fue expulsado.`);
      } else {
        interaction.reply("Este usuario no puede ser expulsado.");
      }
  },
};
