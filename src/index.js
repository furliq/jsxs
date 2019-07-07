const { extract } = require('./util')
const prototypes = require('../prototypes')
const globals = require('./globals')
const mods = Object.keys(extract(prototypes))

module.exports = {
    globals, mods
}