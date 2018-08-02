function deret(arr) {
  var newArr = [];
  var deviate;
  for(count = 1; count < arr.length; count++) {
    deviate = arr[count] / arr[count-1];
    newArr.push(deviate);
  }

  var resultArr = newArr.every( (val, i, arr) => val === arr[0] );
  return resultArr;
}

// TEST CASES
console.log(deret([1, 3, 9, 27, 81])); // true
console.log(deret([2, 4, 8, 16, 32])); // true
console.log(deret([2, 4, 6, 8])); // false
console.log(deret([2, 6, 18, 54])); // true
console.log(deret([1, 2, 3, 4, 7, 9])); // false
