Object.prototype.keys = function () {
    return Object.keys(this);
}
Object.prototype.values = function () {
    return Object.values(this);
}
Object.prototype.symbols = function () {
    return Object.getOwnPropertySymbols(this);
}

Object.prototype.properties = function () {
    return Object.getOwnPropertyNames(this.__proto__);
}
Object.prototype.descriptors = function () {
    return Object.getOwnPropertyDescriptors(this.__proto__);
}
Object.defineProperty(Object.prototype, 'meta', {
    get() { return Object.getOwnPropertyDescriptors(this); }    
})