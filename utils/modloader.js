const https = require('https');
const http = require('http');
const fs = require("fs")
const db = require("quick.db")
const Discord = require('discord.js');
const global = require('../globalTMP.json');
const prefix = global.info.prefix;
const downloader = require('../utils/downloader.js');
const cp = require('child_process');

module.exports = { loadExt }

function loadExt(){
    const moduleFiles = fs.readdirSync(`./modules`).filter(file => file.endsWith('.json'));
    for (const module of moduleFiles){
        const mod = require(`../modules/${module}`);
        const commands = Object.keys(mod.commands);
        const info = Object.keys(mod.infoFile);
        for (const command of commands) {
            const cmd = mod.commands[command];
            downloader.downloadCommand(cmd, command, `./commands/ext/${mod.name}/`);
            console.log(`> imported command: '${mod.commandPrefix}-${command}'`)
        }
        for (const config of info){
            const configFile = mod.infoFile[config]
            downloader.downloadConfig(configFile, config, `./commands/ext/${mod.name}`)
            console.log(`Imported config file for "${mod.name}"`);
        }
        console.log(`Imported ${commands.length} command(s) from module "${mod.name}"`)
        
    }
}