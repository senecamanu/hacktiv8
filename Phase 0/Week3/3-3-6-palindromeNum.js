function numPalindrome(num) {
  var numRev = num.toString().split('').reverse().join(''); //to string, split, reverse, join.

  function findPalindrome(x) {
    while (x != x.toString().split('').reverse().join('')) {
      x++;
    }
    return x;
  }

  var nextPalindrome;

  if (num == numRev) {
    num++;
    nextPalindrome = findPalindrome(num);
    //return the value so it works when console.log()
    return nextPalindrome;
  }
  else {
    nextPalindrome = findPalindrome(num);
    return nextPalindrome;
  }
}

console.log(numPalindrome(8)); // 9
console.log(numPalindrome(10)); // 11
console.log(numPalindrome(117)); // 121
console.log(numPalindrome(175)); // 181
console.log(numPalindrome(1000)); // 1001
