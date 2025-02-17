function range(start) {
    let arr = []
    return function (end){
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }
}

let rangeFrom3To = range(3)
let rangeFrom7To = range(7)

console.log(rangeFrom3To(8))




