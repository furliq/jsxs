const { extract } = require('./util')
const prototypes = require('../prototypes')
const mods = Object.keys(extract(prototypes))
const globals = require('./globals')
const { meta } = require('../prototypes/Object')

module.exports = {
    ...globals, mods
}