function totalDigitRekursif(angka) {
  // you can only write your code here!
  var testLength = angka.toString();
  if(testLength.length > 1) {
    var numToString = angka.toString();
    var stringToArray = numToString.split('');
    for(let i = 0; i < stringToArray.length; i++) {
      stringToArray[i] = Number(stringToArray[i]);
    }

    var result = 0;
    for(let c = 0; c < stringToArray.length; c++) {
      result += stringToArray[c];
    }

    if (result.length > 1) {
      totalDigitRekursif(result);
    }
    return result;
  }

  else {
    return angka;
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
