module.exports = function values() {
    Object.prototype.values = function () {
        return Object.values(this)
    }
}