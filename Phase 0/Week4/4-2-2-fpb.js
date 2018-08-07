function fpb(num1, num2) {
  var result = 0;
  var maxNum = 0;

  if (num1 < num2) {
    maxNum = num1;
  }
  else {
    maxNum = num2;
  }

  for(i = 0; i < maxNum; i++) {
    if (Number.isInteger(num1/i)) {
      if(Number.isInteger(num2/i)) {
        if(i > result) {
          result = i;
        }
      }
    }
  }
  return result;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
