const { defineAccessor } = require('../src/util')

module.exports = Object.defineProperties({}, {
    filter: defineAccessor(() => {
        Set.prototype.filter = function(pred) {
            const _ = new Set(this)
            _.forEach(e => (pred(e)? null: _.delete(e)))
            return _
        }
    }),
    union: defineAccessor(() => {
        Set.prototype.union = function(other) {
            return new Set([...this, ...other])
        }
    }),
    intersect: defineAccessor(() => {
        Set.prototype.intersect = function(other) {
            return this.filter(x => other.has(x))
        }
    }),
    diff: defineAccessor(() => {
        Set.prototype.diff = function(other) {
            return this.filter(x => !other.has(x))
        }
    }),
})