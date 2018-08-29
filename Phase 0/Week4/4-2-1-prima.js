function angkaPrima(angka) {

//gets out the basic 3 number first

var result = true;

  if(angka < 2) {
    result = false;
  }

  else if(angka > 1 && angka <= 3) {
    result = true;
  }
  else {
    for(i = 2; i < angka; i++) {
      if (Number.isInteger(angka/i)) {
        result = false;
        }
      }
    }
  return result;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(34)); // false
console.log(angkaPrima(199)); // true
