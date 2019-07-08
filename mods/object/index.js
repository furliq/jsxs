const { getters } = require('../../src/util')

module.exports = getters({
    keys: require('./keys'),
    values: require('./values'),
    entries: require('./entries'),
    symbols: require('./symbols'),
    properties: require('./properties'),
    descriptors: require('./descriptors')
})