const objects = {
    assign: Object.assign,
    create: Object.create,
    is: Object.is,

    freeze: Object.freeze,
    seal: Object.seal,
    preventExtensions: Object.preventExtensions,

    isFrozen: Object.isFrozen,
    isSealed: Object.isSealed,
    isExtensible: Object.isExtensible,

    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties,

    keys: Object.keys,
    entries: Object.entries,
    values: Object.values,

    getProto: Object.getPrototypeOf,
    setProto: Object.setPrototypeOf
}

function extract(args){
    if(args.length == 1) return args[0];
    return args;
}

const maths = {
    min: (...args) => Math.min(...extract(args)),
    max: (...args) => Math.max(...extract(args)),

    random: Math.random,
    floor: Math.floor,
    ceil: Math.ceil,
    round: Math.round,

    sum: (...args) => extract(args).reduce((a, b) => a+b, 0),
    avg: (array) => (array.length? sum(array)/array.length : null)
}

const customs = {
    set: (...args) => new Set(args),
    map: (iter) => new Map(iter),
    ...(Array.range? { range: Array.range }: {}),
}

const sxs = {
    ...objects, ...maths, ...customs
}

module.exports = sxs