const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction, Client } = require("discord.js");
const { BOT } = require("../../../config");
module.exports = {
  ...new SlashCommandBuilder()
    .setName("mute")
    .setDescription("silenciar miembro")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("miembro silenciado")
        .setRequired(true)
    ),
  /**
   *@param {Client}client
   * @param {CommandInteraction} interaction
   */
  ejecutar: (client, interaction) => {
    const member = interaction.options.getMember("member");
    if (
      interaction.member.roles.cache.find((rol) => rol.id === BOT.permisos_id)
    ) {
      if (member.roles.cache.find((rol) => rol.id === BOT.permisos_id))
        return interaction.reply("Este usuario no puede ser expulsado");
      member.roles.add(BOT.mute);
      interaction.reply("Usuario silenciado");
    } else interaction.reply("No tienes permisos para usar este comando");
  },
};
