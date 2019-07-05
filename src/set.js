Set.prototype.filter = function(pred) {
    const _ = new Set(this)
    _.forEach(e => (pred(e)? null: _.delete(e)))
    return _
}

Set.prototype.union = function(other) {
    return new Set([...this, ...other])
}

Set.prototype.intersect = function(other) {
    return this.filter(x => other.has(x))
}

Set.prototype.diff = function(other) {
    return this.filter(x => !other.has(x))
}