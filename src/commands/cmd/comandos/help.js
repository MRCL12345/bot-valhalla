const {
  MessageButton,
  MessageActionRow,
  MessageEmbed,
  Message,
  Interaction,
} = require("discord.js");
module.exports = {
  name: "help",
  desc: "say all the commands",
  usage: "help",
  aliases: [],
  isPrivate: false,
  guildOnly: false,
  category: "test",
  isOwner: true,
  /**
   * @param {Client} client
   * @param {Message} msg
   * @param {Interaction} interaction
   */
  run: (client, msg, args) => {
    //! MENSAJE
    let embed = new MessageEmbed()
      .setTitle("Help")
      .setColor("#FF2D2D")
      .setDescription(`Hola estos son mis comandos`)
      .addFields(
        {
          name: "Comandos:",
          value: `
          ping
          help
          `,
          inline: true,
        },
        {
          name: "Value:",
          value: `
          muestra tu ping
          mensaje de ayuda
          `,
          inline: true,
        }
      );
    // ! BOTONES
    const RolMod = new MessageButton()
      .setCustomId("mod")
      .setLabel("Rol Mod")
      .setStyle("PRIMARY");

    const RolPermissions = new MessageButton()
      .setCustomId("permisos")
      .setLabel("Valhalla Permissions")
      .setStyle("PRIMARY");
    const Basico = new MessageButton()
      .setCustomId("basicos")
      .setLabel("Basico")
      .setStyle("SECONDARY");
    // ! MENSAJE DE BOTONES
    let botones1 = new MessageActionRow().addComponents(RolMod, RolPermissions);
    // ! MENSAJE DE HELP
    let mensaje = msg.channel.send({
      embeds: [embed],
      components: [botones1],
    });
    // ! INTERACCION
    client.on("interactionCreate", (interaction) => {
      if (interaction.isButton()) {
        if (interaction.customId === "basicos") {
          // ! BASICOS
          embed = new MessageEmbed()
            .setTitle("Help")
            .setColor("#FF2D2D")
            .setDescription(`Hola estos son mis comandos`)
            .addFields(
              {
                name: "Comandos Mod:",
                value: `
          ping
          help
          `,
                inline: true,
              },
              {
                name: "Value:",
                value: `
          muestra tu ping
          mensaje de ayuda
          `,
                inline: true,
              }
            );
          botones1 = new MessageActionRow().addComponents(
            RolMod,
            RolPermissions
          );
          mensaje.then((value) => value.delete());
          mensaje = msg.reply({ embeds: [embed], components: [botones1] });
          // ! VALHALLA MOD
        } else if (interaction.customId === "mod") {
          botones1 = new MessageActionRow().addComponents(
            RolPermissions,
            Basico
          );
          embed
            .setTitle("Valhalla Moderator")
            .setDescription("Toda la informacion del rol Valhalla Moderator")
            .setFields(
              {
                name: "Comandos:",
                value: `
              clear
              kick
              mute
              `,
                inline: true,
              },
              {
                name: "Funcion:",
                value: `
              elimina mensajes
              expulsa miembros
              silencia miembros
              `,
                inline: true,
              }
            );
          mensaje.then((value) => value.delete());
          mensaje = msg.reply({ embeds: [embed], components: [botones1] });
          // ! VALHALLA PERMISSIONS
        } else if (interaction.customId === "permisos") {
          botones1 = new MessageActionRow().addComponents(RolMod, Basico);
          embed
            .setTitle("Valhalla Permissions Mod")
            .setDescription("Toda la informacion del rol Valhalla Permissions")
            .setFields(
              {
                name: "Commandos:",
                value: `
            autorol
            ban
            clear
            kick
            mute
            `,
              },
              {
                name: "Funcion:",
                value: `
            envia mensaje de auto rol
            banea miembros
            limpia mensajes
            expulsa miembros
            silencia miembros
            `,
              }
            );
          mensaje.then((v) => v.delete());
          mensaje = msg.reply({
            embeds: [embed],
            components: [botones1],
          });
        }
      }
    });
  },
};
