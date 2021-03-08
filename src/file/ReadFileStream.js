const fs = require('fs');
const readline = require('readline');
const File = require('./File');

class ReadFileStream extends File {

    read(filepath, callbackReadEachLine, callbackFinishReadFile) {
        const resource = readline.createInterface({
            input: fs.createReadStream(filepath),
            output: process.stdout,
            terminal: false
        });
        
        resource.on('line', (line) => {
            callbackReadEachLine(line);
        });
        
        resource.on('close', callbackFinishReadFile);
    }
}

module.exports = ReadFileStream;