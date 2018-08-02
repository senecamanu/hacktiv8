function deret(arr) {
  var newArr = [];
  var deviate;
  for(count = 1; count < arr.length; count++) {
    deviate = arr[count] - arr[count-1];
    newArr.push(deviate);
  }

  var resultArr = newArr.every( (val, i, arr) => val === arr[0] );
  return resultArr;
}

// TEST CASES
console.log(deret([1, 2, 3, 4, 5, 6])); // true
console.log(deret([2, 4, 6, 12, 24])); // false
console.log(deret([2, 4, 6, 8])); // true
console.log(deret([2, 6, 18, 54])); // false
console.log(deret([1, 2, 3, 4, 7, 9])); // false
