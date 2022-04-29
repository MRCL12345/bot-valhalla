
module.exports = {
  name: "ping",
  desc: "say your ping",
  aliases: ["ping"],
  isPrivate: false,
  guildOnly: false,
  category: "test",
  isOwner: true,
  run: (client, msg, args) => {
    msg.reply(`You have: ${Math.round(client.ws.ping)}ms`);
  },
};
