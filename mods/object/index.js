const { getters } = require('../../src/util')

module.exports = getters({
    keys: require('./keys'),
    values: require('./values'),
    symbols: require('./symbols'),
    properties: require('./properties'),
    descriptors: require('./descriptors')
})