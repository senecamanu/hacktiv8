// CHANGE VOCALS
function changeVocals (str) {
  //code di sini
  var vowels = 'aiueo';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var splitStr = str.split('');
  for(let i = 0; i < str.length; i++) {
    for(let c = 0; c < vowels.length; c++) {
      if(str[i] == vowels[c]) {
        for(let z = 0; z < alphabet.length; z++) {
          if(str[i] == alphabet[z]) {
            splitStr[i] = alphabet[z+1];
          }
        }
      }
    }
  }

  var strJoin = splitStr.join();

  for(let m = 0; m < strJoin.length; m++) {
    if(strJoin[m] == ',') {
      strJoin = strJoin.replace(',', '');
    }
  }
  return strJoin;
}


// REVERSE
function reverseWord (str) {
  //code di sini
  var strRev = str.split('').reverse().join('');
  return strRev;
}


// CHANGE CASE
function setLowerUpperCase (str) {
  //code di sini
  var arrayedStr = str.split('');
  for(let n = 0; n < arrayedStr.length; n++) {
    if(arrayedStr[n] == arrayedStr[n].toUpperCase()) {
      arrayedStr[n] = arrayedStr[n].toLowerCase();
    }
    else if(arrayedStr[n] == arrayedStr[n].toLowerCase()) {
      arrayedStr[n] = arrayedStr[n].toUpperCase();
    }
  }
  var arrayedStr = arrayedStr.join('');
  return arrayedStr;
}


// REMOVE SPACES
function removeSpaces (str) {
  //code di sini
  var arrayedRS = str.split('');
  for(let q = 0; q < arrayedRS.length; q++) {
    if(arrayedRS[q] == ' ') {
      arrayedRS[q] = '';
    }
  }
  var result = arrayedRS.join('');
  return result;
}

function passwordGenerator (name) {
  //code di sini
  var vocaled = changeVocals(name);
  var reversed = reverseWord (vocaled);
  var switchCase = setLowerUpperCase(reversed);
  var result = removeSpaces(switchCase);

  if (result.length < 5) {
    result = 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
