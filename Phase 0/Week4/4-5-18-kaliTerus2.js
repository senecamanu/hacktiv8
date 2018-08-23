function kaliTerusRekursif(angka) {
    var angkaStr = angka.toString()
    //phase 1
    if(angkaStr.length === 1) {
        return angka;
    }
    else {
            return kaliTerusRekursif(Number(angkaStr[0]) * kaliTerusRekursif(Number(angkaStr.slice(1))));
    }
}
 
// TEST CASES;
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6