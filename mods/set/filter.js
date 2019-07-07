module.exports = function filter() {
    Set.prototype.filter = function(pred) {
        const _ = new Set(this)
        _.forEach(e => (pred(e)? null: _.delete(e)))
        return _
    }
}