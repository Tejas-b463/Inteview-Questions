// polyfills for map

Array.prototype.myMap = function(cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const arr = [1, 2, 3, 4]

const mapping = arr.myMap((arr) => {
    return arr * 2
})

console.log(mapping)

// polyfills for filters

Array.prototype.myFilter = function(cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

const arr1 = [1, 2, 3, 4]

const filtering = arr1.myMap((arr) => {
    return arr * 2
})

console.log(filtering)


// polyfills for reduce

Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < acc.length; i++) {
        if (acc[i] === initialValue) {

        }
    }
}