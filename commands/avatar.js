const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Replies with your avatar!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member whose avatar you want to see')
				.setRequired(false)),
	async execute(interaction) {
		if (interaction.options.getUser('target')) {
			const user = interaction.options.getUser('target');
			await interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		}
		else {
			await interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
		}
		// await interaction.reply(`Your avatar: <${interaction.user.displayAvatarURL({ dynamic: true })}>`);
	},
};
