module.exports = function entries() {
    Object.prototype.entries = function () {
        return Object.entries(this)
    }
}