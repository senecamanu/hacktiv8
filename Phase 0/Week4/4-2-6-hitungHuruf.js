function hitungHuruf(kata) {
  var splitted = kata.split(' ').reverse();
  var result = '', resultScore = 0;

  for (let i = 0; i < splitted.length; i++) {
    var tempScore = 0;
    for (let c = 0; c < splitted[i].length; c++) {
      for (let d = 0; d < splitted[i].length; d++) {
        if ((c != d) && splitted[i][c] == splitted[i][d]) {
          tempScore++;
        }
      }
    }
    if (tempScore >= resultScore) {
      result = splitted[i];
      resultScore = tempScore;
    }
  }
  //error handling
  if (resultScore == 0) {
    result = -1;
  }
  return result;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau