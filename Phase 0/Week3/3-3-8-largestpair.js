function pasanganTerbesar(num) {
  // you can only write your code here!
  var numArray = num.toString().match(/.{1,2}/g).sort();
  var numArrayMoved = num.toString().substr(1).match(/.{1,2}/g).sort();
  var numArrayCombine = numArray.concat(numArrayMoved).sort().pop();

  return numArrayCombine;

}

//IGNORE THESE

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

//try faster

function highAndLow(numbers) {
  var arr = numbers.toString().split('').map(Number);
  var largest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  // return largest;
}

console.log(highAndLow(4 5 29 54 4 0 -214 542 -64 1 -3 6 -6));

var str = 641573;
