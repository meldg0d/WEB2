function countChar(input, chars) {
    let count = 0;
    for (let i = 0; i < input.length-1; i++) {
        if (input[i] === chars) {
            count++;
        }
    }
    return count;
}

console.log(countChar("Knives are sharp", "i"));