const fs = require("fs");

const readFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf8');
};

module.exports = {
    readFile
}