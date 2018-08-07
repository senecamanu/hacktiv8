function checkAB(num) {
  // you can only write your code here!
  for (i = 0; i < num.length; i++) {
    if (num[i] == 'a') {
      var numA = i;
      console.log(i)
    }
    if (num[i] == 'b') {
      var numB = i;
      console.log(i)
    }
}

    var almostResult = Math.abs(numA - numB);

    if (almostResult == 4) {
      return true;
    }
    else {
      return false;
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
