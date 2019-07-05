Array.prototype.at = function (index) {
    return this[index];
}

Array.prototype.isEmpty = function () {
    return this.length === 0;
}

Array.prototype.shuffle = function () {
    return this.sort(() => Math.random() - 0.5);
}

Array.prototype.distinct = function () {
    return Array.from(new Set(this));
}

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