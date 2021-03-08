/*

Toggle - Command indexer

Original code by Anden Wieseler and ZedTek. For Licensing info, see https://github.com/ZedTek-Official/toggle-base/blob/main/LICENSE

*/

// Tell console that we're ready

console.log('Toggle v1 - STARTED');

// Load dependencies and get global vars

const fs = require("fs")
const Discord = require('discord.js');
const global = require('./global.json');
const client = new Discord.Client();
const prefix = global.info.prefix;

// Kickoff

client.on("ready", () =>{
    client.user.setPresence({
        game: {
            name: global.info.game.name,
            type: global.info.game.type
        }
    });
    loadExt();
});

// Message listeners

client.on('message', message => {
    if (message.content.toLowerCase().startsWith(`${prefix} `)){
        client.commands = new Discord.Collection();
        const extensionCommands = fs.readdirSync('./commands/ext');
        const commandFiles = fs.readdirSync(`./commands/base/`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./commands/base/${file}`);
            client.commands.set(command.name, command);
        }
        for (const ext of extensionCommands){
            const command = fs.readdirSync(`./commands/ext/${ext}`).filter(file => file.endsWith('.js'));
            for (const file of command){
                const extCommand = require(`./commands/ext/${ext}/${file}`);
                client.commands.set(extCommand.name, extCommand)
            }
        }
        printCommand(prefix, message);
    }
    
});

// Global functions

function printCommand(prefix, message){
    const lowerMessage = message.content.toLowerCase();
    const args = lowerMessage.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send('There was an error trying to execute that command!');
    }
}

function loadExt(){

}

// Discord API login

client.login('ODE3NDkwNjYwOTIzMjc3MzUy.YEKRgQ.MnxkI_2KFyKCK86F1Thk-hYf8GU');
