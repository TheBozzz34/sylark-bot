const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Replies with your avatar!'),
	async execute(interaction) {
		await interaction.reply(`Your avatar: <${interaction.user.displayAvatarURL({ dynamic: true })}>`);
	},
};
