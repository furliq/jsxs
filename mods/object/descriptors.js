module.exports = function descriptors() {
    Object.prototype.descriptors = function() {
        return Object.getOwnPropertyDescriptors(this.__proto__)
    }
}