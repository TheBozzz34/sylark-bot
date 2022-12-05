/* eslint-disable no-mixed-spaces-and-tabs */

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
 	data: new SlashCommandBuilder()
 		.setName('eval')
 		.setDescription('Evaluates code')
 		.addStringOption(option =>
 			option
 				.setName('code')
 				.setDescription('The code you want to evaluate')
 				.setRequired(true)),
 	async execute(interaction) {
 		const code = interaction.options.getString('code');
 		if (interaction.user.id == '457659194535837727') {
 			try {
 				const ev = eval(code);
 				await interaction.reply('```' + ev + '```');
 			}
 			catch (err) {
				await interaction.reply('Code successfully evaluated, check the console for more details.');
 				await interaction.reply('```' + err.stack.split('\n', 1).join('') + '```');
 			}
 		}
 		else {
 			await interaction.reply('This command can only be used by the bot owner!');
 		}
 	},
};

