module.exports = function symbols() {
    Object.prototype.symbols = function () {
        return Object.getOwnPropertySymbols(this)
    }
}