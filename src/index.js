const {extract} = require('./util')
const prototypes = extract(require('../mods'))
const mods = Object.keys(prototypes)
const globals = require('./globals')

module.exports = {
    ...globals, mods
}