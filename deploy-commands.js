// Environment Token for Discord
const dotenv = require('dotenv');
dotenv.config();

// Register a slash command against the Discord API
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// Require files from commands folder
const fs = require('node:fs');
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version : '9'}).setToken(process.env.DISCORD_TOKEN);

rest.put( Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID), 
            {body : commands} )
    .then(()=>{
        console.log('Successfully refreshed application (/) commands.');
    })
    .catch(console.error);