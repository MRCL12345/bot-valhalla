const { BOT } = require("../config");
module.exports = {
  name: "messageCreate",
  run: (client, msg) => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(BOT.prefix)) return;
    let [cmdname, ...cmdargs] = msg.content
      .slice(BOT.prefix.length)
      .trim()
      .split(/\s+/);
    const cmd =
      client.commands.get(cmdname) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(cmdname)
      );
    if (!cmd) return;
    if (cmd.status) return msg.channel.send("comando deshabilitado");
    cmd.run(client, msg, cmdargs);
  },
};
