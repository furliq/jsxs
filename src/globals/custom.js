const spread = Object.spread = function spread(obj) {
    return ({ ...obj });
}

const rest = Array.rest = function rest(iter) {
    return [...iter];
}

const fromEntries = Object.fromEntries = function fromEntries(objEntries) {
    return objEntries.map(([key, value]) => {
        return { [key]: value }
    }).reduce((a, b) => Object.assign(a, b), {});
}

const range = Array.range = function range(start, end = null, step = 1) {
    if(!end) return Array(start).fill(null).map((x, i) => i);
    else if(end <= start) {
        step = end;
        end = start;
        start = 0;
    }
    let _ = []
    while(end > start){
        _.push(start)
        start += step
    }
    return _
}

module.exports = {
    rest, spread,
    range, fromEntries,
    set: (...args) => new Set(args),
    map: (iter) => new Map(iter)
}