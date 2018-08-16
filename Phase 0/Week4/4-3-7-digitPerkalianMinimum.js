function digitPerkalianMinimum(angka) {

    var half = Math.floor(angka/2), str = [1], i, j;
    angka % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2); //condition ? true : false

    for (i; i <= half; i += j) {
        angka % i === 0 ? str.push(i) : false;
    }

    str.push(angka); // add original angka

    var result = [];
    var counterS = 0;
    var counterE = str.length - 1;
    for(var c = 0; c < str.length / 2; c++) {
      result.push(str[counterS].toString() + str[counterE].toString());
      counterS++;
      counterE--;
    }
    return result[result.length - 1].length;
}

console.log(digitPerkalianMinimum(24));
console.log(digitPerkalianMinimum(90));
console.log(digitPerkalianMinimum(20));
console.log(digitPerkalianMinimum(179));
console.log(digitPerkalianMinimum(1));
