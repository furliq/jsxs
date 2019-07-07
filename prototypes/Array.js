const { defineAccessor } = require('../src/util')

module.exports = Object.defineProperties({}, {
    at: defineAccessor(() => {
        Array.prototype.at = function (index) {
            return this[index];
        }
    }),
    isEmpty: defineAccessor(() => {
        Array.prototype.isEmpty = function () {
            return this.length === 0;
        }
    }),
    skip: defineAccessor(() => {
        Array.prototype.skip = function (count) {
            return (count > 0)? this.slice(count) : [];
        }
    }),
    take: defineAccessor(() => {
        Array.prototype.take = function (count, offset=null) {
            return (count > 0)? 
                        (offset > 0)? 
                            this.slice(offset, offset+count):
                            this.slice(0, count)
                    :[];
        }
    }),
    shuffle: defineAccessor(() => {
        Array.prototype.shuffle = function () {
            return this.sort(() => Math.random() - 0.5);
        }
    }),
    distinct: defineAccessor(() => {
        Array.prototype.distinct = function () {
            return Array.from(new Set(this));
        }
    })
})