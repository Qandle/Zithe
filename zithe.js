// Require the necessary discord.js classes
const Discord = require('discord.js');
const fs = require('node:fs');
const client = new Discord.Client({
	intents: [
		Discord.GatewayIntentBits.Guilds,
	],
});

// Environment Token for Discord
const dotenv = require('dotenv');
dotenv.config();

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// Require files from commands folder
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered '${interaction.commandName}'.`);

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true,
		});
	}
});