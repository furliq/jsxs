module.exports = function isEmpty() {
    Array.prototype.isEmpty = function() {
        return this.length === 0;
    }
}