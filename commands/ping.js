const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	_data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	get data() {
		return this._data;
	},
	set data(value) {
		this._data = value;
	},
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};

