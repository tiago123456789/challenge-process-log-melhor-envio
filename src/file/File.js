const fs = require("fs");

class File {

    isExist(filepath) {
       return fs.existsSync(filepath);
    }
}

module.exports = File;