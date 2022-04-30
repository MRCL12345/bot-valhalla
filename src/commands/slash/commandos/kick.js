const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction } = require("discord.js");
const { BOT } = require("../../../config");
module.exports = {
  ...new SlashCommandBuilder()
    .setName("kick")
    .setDescription("descripcion")
    .addUserOption((option) =>
      option.setName("member").setDescription("expulsa").setRequired(true)
    ),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  ejecutar: (client, interaction) => {
    const member = interaction.options.getMember("member");
      if (!member.roles.cache.find((role) => role.id === BOT.permisos_mod_id)) {
        interaction.guild.members.kick(member);
        interaction.reply(`${member.user} fue expulsado`);
      } else {
        interaction.reply("Este usuario no puede ser expulsado");
      }
  },
};
/*
const member = interaction.options.getMember('target');
if (member.roles.cache.some(role => role.name === 'role name')) {
	// ...
}

      interaction.guild.members.kick(user);
      interaction.reply(`${user.tag} fue expulsado.`);
*/
