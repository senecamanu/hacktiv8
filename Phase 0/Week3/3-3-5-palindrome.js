function palindrome(input) {
  var splitInput = input.split("").reverse().join("");

//if-else
  if (splitInput === input) {
    return true;
  }
  else {
    return false;
  }
 }
