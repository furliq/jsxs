module.exports = function take() {
    Array.prototype.take = function (count, offset=null) {
        return (count > 0)? 
                    (offset > 0)? 
                        this.slice(offset, offset+count):
                        this.slice(0, count)
                :[];
    }
}