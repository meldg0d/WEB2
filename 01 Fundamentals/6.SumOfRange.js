function range(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(range(2,10));

function sum(arr) {
    let sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];
    }
    return sum;
}

console.log(sum(range(1,4)));