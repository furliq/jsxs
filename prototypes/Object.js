const { defineAccessor } = require('../src/util')

module.exports = Object.defineProperties({}, {
    keys: defineAccessor(() => {
        Object.prototype.keys = function () {
            return Object.keys(this)
        }
    }),
    values: defineAccessor(() => {
        Object.prototype.values = function () {
            return Object.values(this)
        }
    }),
    symbols: defineAccessor(() => {
        Object.prototype.symbols = function () {
            return Object.getOwnPropertySymbols(this)
        }
    }),
    properties: defineAccessor(() => {
        Object.prototype.properties = function () {
            return Object.getOwnPropertyNames(this.__proto__)
        }
    }),
    descriptors: defineAccessor(() => {
        Object.prototype.descriptors = function () {
            return Object.getOwnPropertyDescriptors(this.__proto__)
        }
    }),
    meta: defineAccessor(() => {
        Object.defineProperty(Object.prototype, 'meta', {
            get() { return Object.getOwnPropertyDescriptors(this) }
        })
    })
});