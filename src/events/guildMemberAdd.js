const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  run: (client, member) => {
    const embed = new MessageEmbed()
      .setAuthor("Valhalla System")
      .setColor("RED")
      .setDescription(
        "Felicidades, has logrado entrar al portal del Valhalla, ahora solo te falta poder accesar al Valhalla y seras un guerrero mas para los dioses. "
      )
      .setImage(
        "https://imgs.search.brave.com/8ivv9kliKpe2wfzXKC7jDPxnDFDQzB5FreC3vagMKJs/rs:fit:1200:1076:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/dmlraW5ncy9pbWFn/ZXMvMy8zNy9Qb3J0/YV9kZWxfVmFsaGFs/bGEuanBnL3Jldmlz/aW9uL2xhdGVzdD9j/Yj0yMDE4MDgyNDE2/MDQyMyZwYXRoLXBy/ZWZpeD1pdA"
      )
      .setFields({
        name: "Verificacion",
        value: "Verificate para poder ingresar al reino de los Dioses",
      });
    member.send({ embeds: [embed] });
    member.roles.add("955319794645745704");
  },
};
