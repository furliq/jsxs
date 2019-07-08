module.exports = function meta() {
    Object.defineProperty(Object.prototype, 'meta', {
        get() { return Object.getOwnPropertyDescriptors(this) }
    })
}