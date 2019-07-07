const path = require('path');
const fs = require('fs'); 
const dir = path.join(__dirname);
const methods = {}

fs.readdirSync(dir).forEach(function (file) {
    if(file === 'index.js') return;
    methods[file.split('.').shift()] = 
        require(path.join(__dirname, file))
});

module.exports = methods