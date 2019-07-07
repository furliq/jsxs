module.exports = function union() {
    Set.prototype.union = function(other) {
        return new Set([...this, ...other])
    }
}