function ubahHuruf(kata) {
  // you can only write your code here!
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var convertedArr = [];

  for(i = 0; i < kata.length; i++) {
    var arrayed = kata.split('');
    var find = alfabet.search(arrayed[i]);
    var converted = alfabet[find + 1];
    convertedArr.push(converted);
  }
  var result = convertedArr.join('');
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
