//chartype

function groupAnimals(animals) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var kandangUtama = [];

  for(var i = 0; i < alfabet.length; i++) {
    var kandangKecil = [];

    for(var c = 0; c < animals.length; c++) {
      if(alfabet[i] == animals[c][0]) {
        kandangKecil.push(animals[c]);
      }
    }

    if(kandangKecil.length > 0){
      kandangUtama.push(kandangKecil);
      
    }

  }
  return kandangUtama;
}

// TEST CASES
console.time('cek');
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
console.timeEnd('cek');
