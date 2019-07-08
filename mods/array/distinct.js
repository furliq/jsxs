module.exports = function distinct() {
    Array.prototype.distinct = function () {
        return Array.from(new Set(this));
    }
}