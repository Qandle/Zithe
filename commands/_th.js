const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('_th')
		.setDescription('TH <-> EN')
		.addStringOption((option) =>
			option.setName('word')
				.setDescription('Change word')
				.setRequired(true),
		),
	async execute(interaction) {
		let th = 'ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ';
		let en = '1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';
		th = th.split('');
		en = en.split('');
		const string = interaction.options.getString('word');
		const arrOutput = Array.prototype.map.call(string, (e) => {
			return th.indexOf(e) >= 0 ? en[th.indexOf(e)]
				: e == ' ' ? ' ' : '';
		});
		let output = arrOutput.join('');
		output ? output : output = 'Could not change to English';
		await interaction.reply(output);
	},
};
