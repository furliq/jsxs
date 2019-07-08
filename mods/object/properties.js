module.exports = function properties() {
    Object.prototype.properties = function() {
        return Object.getOwnPropertyNames(this.__proto__)
    }
}