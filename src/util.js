function defineAccessor(getter, setter) {
    return {
        get: getter,
        ...(setter? {set: setter} : {}),
        enumerable: true,
        configurable: true
    }
}

function extract(object) {
    return Object.assign(
        {}, 
        ...Object.keys(object)
            .map(key => ({ ...object[key] })
        )
    )
}

function coalesce(args){
    return (args.length === 1)? args[0] : args;
}

module.exports = {
    defineAccessor, extract, coalesce
}