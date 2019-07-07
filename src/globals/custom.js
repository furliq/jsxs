Array.range = function (start, end = null, step = 1) {
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
    set: (...args) => new Set(args),
    map: (iter) => new Map(iter),
    range: Array.range
}