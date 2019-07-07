module.exports = function intersect() {
    if(!Set.prototype.filter) require('./filter')();
    Set.prototype.intersect = function(other) {
        return this.filter(x => other.has(x));
    }
}