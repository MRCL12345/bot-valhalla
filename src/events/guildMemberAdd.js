const { BOT } = require("../config");
module.exports = {
  name: "guildMemberAdd",
  run: (client, member) => {
    member.roles.add(BOT.unverified);
  },
};
