const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ready",
  run: (client) => {
    const slashcommands = client.slashcommands.map((x) => x);
    client.guilds.cache.get("955313010287710228").commands.set(slashcommands);
    const ready = new MessageEmbed()
      .setAuthor(
        "Valhalla",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FValhalla&psig=AOvVaw2M4VvBVGAoEAFyH-CflrQf&ust=1648175266584000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLD5xsHZ3fYCFQAAAAAdAAAAABAJ"
      )
      .setTitle("Valhalla Bot Is Ready")
      .setDescription("Valhalla Bot is a private app of Valhalla Clan")
      .setFields(
        {
          name: "Comands:",
          value: `-clear
      -ping
      -help`,
          inline: true,
        },
        {
          name: "Value:",
          value: `
      clean 99 messages
      say ur ping
      shows all my capacities
      `,
          inline: true,
        }
      )
      .setColor("#FF2D2D")
      .setThumbnail(
        "https://media.discordapp.net/attachments/725247093295284314/956377282514145300/Vahalla_2.png?width=451&height=409"
      );

    const logsdev = client.channels.cache.find(
      (channel) => channel.id === "955606439441883196"
    );
    console.log(`Esta listo ${client.user.tag}!`);
    logsdev.send({ embeds: [ready] });
    client.user.setActivity("Joning Valhalla", { type: "COMPETING" });
  },
};
