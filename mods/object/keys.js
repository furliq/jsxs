module.exports = function keys() {
    Object.prototype.keys = function () {
        return Object.keys(this)
    }
}