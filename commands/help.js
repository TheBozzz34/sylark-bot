const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('A menu to help you navigate the bot'),
	async execute(interaction) {
		const helpMessageEmbed = {
			color: 0x0099ff,
			title: 'Help',
			description: 'A menu to help you navigate the bot',
			fields: [
				{
					name: '/help',
					value: 'A menu to help you navigate the bot',
				},
				{
					name: '/kick',
					value: 'Kicks a user',
					usage: '/kick @user reason',
				},
				{
					name: '/ban',
					value: 'Bans a user',
					usage: '/ban @user reason',
				},
				{
					name: '/mute',
					value: 'Mutes a user',
					usage: '/mute @user reason',
				},
				{
					name: '/avatar',
					value: 'Shows a user\'s avatar',
					usage: '/avatar @user',
				},
			],
			timestamp: new Date(),
			footer: {
				text: 'Made by @Sadan#9264',
				icon_url: 'https://cdn.discordapp.com/avatars/457659194535837727/7bd541cff2258ee6372ba4e03bf0bf84.webp',
			},
		};
		await interaction.reply({ embeds: [helpMessageEmbed] });


	},
};

