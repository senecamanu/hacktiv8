function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var testLength = angka.toString();
  if(testLength.length > 1) {
    var numToString = angka.toString();
    var stringToArray = numToString.split('');
    for(let i = 0; i < stringToArray.length; i++) {
      stringToArray[i] = Number(stringToArray[i]);
    }

    var result;
    for(let c = 0; c < stringToArray.length; c++) {
      if (result === undefined) {
        result = stringToArray[c];
      }
      else {
        result = result * stringToArray[c];
      }
    }

    var testLength2 = result.toString()
    if (testLength2.length > 1) {
      kaliTerusRekursif(result);
    }

    else {
      return result;
    }

  }

  else {
    return angka;
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
