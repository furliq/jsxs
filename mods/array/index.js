const { getters } = require('../../src/util')

module.exports = getters({
    at: require('./at'),
    distinct: require('./distinct'),
    isEmpty: require('./isEmpty'),
    shuffle: require('./shuffle'),
    skip: require('./skip'),
    take: require('./take')
})