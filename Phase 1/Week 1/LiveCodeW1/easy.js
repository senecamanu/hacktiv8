function moveZeros(input) {
    let temp = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 0) {
            temp.push(input.splice(i, 1));
            i--;
        }
    }
    for (let i = 0; i < temp.length; i++) {
        input = input.concat(temp[i]);
    }
    return input;
}


console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
// [ false, 1, 1, 2, 1, 3, 'a', 0, 0]
console.log(moveZeros([undefined, null, 0, 1, 1, 0]));
// [ undefined, null, 1, 1, 0, 0 ]
console.log(moveZeros([1, 2, 3, 4, 5, 6, 7]));
// [1, 2, 3, 4, 5, 6, 7]