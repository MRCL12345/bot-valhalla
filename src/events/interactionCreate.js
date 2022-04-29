module.exports = {
  name: "interactionCreate",
  run: async (client, interaction) => {
    if (interaction.isCommand()) {
      const command = client.slashcommands.get(interaction.commandName);
      if (!command) return;
      command.ejecutar(client, interaction);
    }
  },
};
