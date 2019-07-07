module.exports = function skip() {
    Array.prototype.skip = function (count) {
        return (count >= 0)? this.slice(count) : [];
    }
}