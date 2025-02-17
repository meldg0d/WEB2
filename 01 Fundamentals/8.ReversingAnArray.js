function reverseArray(arr) {
    let newArr  = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[arr.length - 1 - i]
    }
    return newArr
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return array
}

let arrayValue = ["A", "B", "C"]
console.log(reverseArray(arrayValue))


