/*

Toggle - Command indexer

Original code by Anden Wieseler and ZedTek. For Licensing info, see https://github.com/ZedTek-Official/toggle-base/blob/main/LICENSE

*/

// Load dependencies and get global vars

const fs = require("fs");
const Discord = require('discord.js');
const global = require('./global.json');
const client = new Discord.Client();
const prefix = global.info.prefix;
const modLoader = require('./utils/modloader.js');


// Kickoff

client.on("ready", () =>{

    client.user.setPresence({
        activity: {
            name: global.info.game.name,
            type: global.info.game.type
        }
    });

    console.log('Set presence data to: ' + global.info.game.type + ' ' + global.info.game.name);

    console.log('\n--------\nTOGGLE MODULE LOADER\n--------\n');

    modLoader.loadExt();

    console.log('\n--------\nTOGGLE IS READY FOR USER INPUT.\n--------\n')
});

// Message listeners

client.on('message', message => {

    // check to make sure the message starts with the bot prefix

    if (message.content.toLowerCase().startsWith(`${prefix} `)){

        // make a new collection for commands, and import commands from the /commands direcory

        client.commands = new Discord.Collection();
        const commandFiles = fs.readdirSync(`./commands/base/`).filter(file => file.endsWith('.js'));

        // scan imported commands, and add them to the collection

        for (const file of commandFiles) {

            // scan base commands, and add them to the collection, one by one.

            const command = require(`./commands/base/${file}`);
            client.commands.set(command.name, command);
        }
        if (fs.existsSync('./commands/ext')){
            const extensionCommands = fs.readdirSync('./commands/ext')
            for (const ext of extensionCommands){

                // look for indidvidual modules, and attempt to import their info files.

                const infoFile = require(`./commands/ext/${ext}/config.json`);

                // attempt to find extension commands, and add them to the collection.

                const command = fs.readdirSync(`./commands/ext/${ext}`).filter(file => file.endsWith('.js'));
                for (const file of command){

                    // import the command for naming and collecting.

                    const extCommand = require(`./commands/ext/${ext}/${file}`);

                    // set the command name as (module name)-(command).

                    client.commands.set(`${infoFile.commandPrefix}-${extCommand.name}`, extCommand);
                }
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


// Discord API login

client.login(global.token);