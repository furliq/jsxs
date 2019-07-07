const { getters } = require('../../src/util')

module.exports = getters({
    diff: require('./diff'),
    union: require('./union'),
    filter: require('./filter'),
    intersect: require('./intersect')
})