const path = require('path');
const fs = require('fs');
const dirPath = (dir) => path.join(__dirname, dir);
const exportDir = (dir) => {
    const mod = {}
    fs.readdirSync(dirPath(dir)).forEach(function (file) {
        if(file === 'index.js') return;
        mod[file.split('.').shift()] = require(path.join(__dirname, dir, file));
    });
    return mod;
}
const { getters } = require('../src/util')

module.exports = getters(Object.assign({}, exportDir('object'), exportDir('array'), exportDir('set')))