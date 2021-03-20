const fs = require('fs');
const https = require('https');
const http = require('http');

module.exports = { downloadCommand, downloadConfig }

function downloadCommand(url, command, dest, cb){
    if (!fs.existsSync(dest)){
        fs.mkdirSync(dest);
    }
    const file = fs.createWriteStream(`${dest}/${command}.js`);
    if (url.startsWith('https://')){
        const request = https.get(url, function(response) {
            response.pipe(file);
            file.on('finish', function() {
                file.close(cb);  
            });
        }).on('error', function(err) {
            fs.unlink(dest); 
            if (cb) cb(err.message);
        });
    }
    if (url.startsWith('http://')){
        const request = http.get(url, function(response) {
            response.pipe(file);
            file.on('finish', function() {
                file.close(cb);  
            });
        }).on('error', function(err) {
            fs.unlink(dest); 
            if (cb) cb(err.message);
        });
    }
    
};

function downloadConfig(url, config, dest, cb){
    if (!fs.existsSync(dest)){
        fs.mkdirSync(dest);
    }
    const file = fs.createWriteStream(`${dest}/${config}.json`);
    if (url.startsWith('https://')){
        const request = https.get(url, function(response) {
            response.pipe(file);
            file.on('finish', function() {
                file.close(cb);  
            });
        }).on('error', function(err) {
            fs.unlink(dest); 
            if (cb) cb(err.message);
        });
    }
    if (url.startsWith('http://')){
        const request = http.get(url, function(response) {
            response.pipe(file);
            file.on('finish', function() {
                file.close(cb);  
            });
        }).on('error', function(err) {
            fs.unlink(dest); 
            if (cb) cb(err.message);
        });
    }
    
};