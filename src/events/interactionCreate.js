const { BOT } = require("../config");
module.exports = {
  name: "interactionCreate",
  run: async (client, interaction) => {
    if (interaction.isCommand()) {
      if (
        interaction.member.roles.cache.find((rol) => rol.id === BOT.permisos_id)
      ) {
        const command = client.slashcommands.get(interaction.commandName);
        if (!command) return;
        command.ejecutar(client, interaction);
      } else interaction.reply("No tienes permisos para usar este comando");
    }
  },
};
