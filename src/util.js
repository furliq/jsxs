function defineAccessor(getter, setter) {
    return {
        get: getter,
        ...(setter? {set: setter} : {}),
        enumerable: true
    }
}

function extract(object) {
    return Object.assign(
        {}, Object.keys(object).map(key => ({ ...object[key] }))
    )
}

function coalesce(args){
    if(args.length == 1) return args[0];
    return args;
}

module.exports = {
    defineAccessor, extract, coalesce
}