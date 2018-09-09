function createNestedArr (row, col) {
    //code
    let result = [], latin = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < row; i++) {
        let tempResult = [];
        for (let c = 0; c < col; c++) {
            tempResult.push(latin[Math.floor(Math.random() * 26)])
        }
        result.push(tempResult);
    }
    return result;
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))