module.exports = function at() {
    Array.prototype.at = function(index) {
        return this[index];
    }
}