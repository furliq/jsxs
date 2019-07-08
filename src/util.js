function defineAccessor(getter, setter) {
    return {
        get: getter,
        ...(setter? {set: setter} : {}),
        enumerable: true,
        configurable: true
    }
}

function getters(props) {
    return Object.defineProperties(
        {},
        Object.assign({}, 
            ...Object.keys(props)
            .map(x => ({
                [x]: defineAccessor(props[x])
            }))
        ),
    );
}

function extract(obj) {
    return ({ ...obj });
}

function coalesce(args){
    return (args.length === 1)? args[0] : args;
}

module.exports = {
    defineAccessor, getters, extract, coalesce
}