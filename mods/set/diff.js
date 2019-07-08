module.exports = function diff() {
    if(!Set.prototype.filter) require('./filter')();
    Set.prototype.diff = function(other) {
        return this.filter(x => !other.has(x));
    }
}