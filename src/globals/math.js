const { coalesce } = require('../util')

module.exports = {
    min: (...args) => Math.min(...coalesce(args)),
    max: (...args) => Math.max(...coalesce(args)),

    random: Math.random,
    floor: Math.floor,
    ceil: Math.ceil,
    round: Math.round,

    sum: (...args) => coalesce(args).reduce((a, b) => a+b, 0),
    avg: (array) => (array.length? sum(array)/array.length : null)
}