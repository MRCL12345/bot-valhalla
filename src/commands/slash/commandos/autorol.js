const { BOT } = require("../../../config");
const { MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");
module.exports = {
  name: "autorol",
  description: "auto rol de entrada",
  ejecutar: (client, interaction) => {
    // !------------ MENSAJE
    const mensaje = new MessageEmbed()
      .setAuthor("Valhalla System")
      .setColor("#FF2D2D")
      .setTitle("Verficacion")
      .setDescription(
        `Presiona el boton para ser verificado. 
        Estas a solo un paso de entrar al Valhalla, presiona el boton que esta abajo de este mensaje y lograras entrar.`
      );
    // !------------ BOTONES
    const verificame = new MessageButton()
      .setLabel("Verificame")
      .setCustomId("verificame")
      .setStyle("SUCCESS");
    // ! ----------- PERMISOS
    if (
      interaction.member.roles.cache.find((rol) => rol.id === BOT.permisos_id)
    ) {
      //! MENSAJE
      const verificacion = new MessageActionRow().addComponents(verificame);
      interaction.channel.send({
        embeds: [mensaje],
        components: [verificacion],
      });
      interaction.reply("Message Verification Updated");
      interaction.deleteReply();
      // ! ------------ AL PRESIONAR
      client.on("interactionCreate", (interaction) => {
        if (interaction.isButton()) {
          if (interaction.customId === "verificame") {
            if (
              interaction.member.roles.cache.find(
                (r) => r.id === BOT.unverified
              )
            ) {
              interaction.deferUpdate();
              interaction.member.roles.remove(BOT.unverified);
              interaction.user.send("Estas verificado.");
            } else {
              interaction.deferUpdate();
              interaction.user.send("Ya estabas verificado.");
            }
          }
        }
      });
    } else interaction.reply("No tienes permisos para usar este comando");
  },
};
