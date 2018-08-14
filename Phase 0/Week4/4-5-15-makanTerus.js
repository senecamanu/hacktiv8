function equation(num) {
  var result = 0;
  for(var i = num; i > 0; i -= 15) {
    result++;
  }
  return result;
}

function makanTerusRekursif(waktu) {
  // you can only write your code here!
  return equation(waktu);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
