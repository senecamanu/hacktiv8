function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

  var result = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
// defining prices

    var startNum = 0;
    var endNum = 0;
    for (let b = 0; b < rute.length; b++) {
      if(rute[b] == arrPenumpang[i][1]) {
        startNum = b;
      }
      else if (rute[b] == arrPenumpang[i][2]) {
        endNum = b;
      }
    }
    var price = (endNum - startNum)*2000;
// result for each penumpang

    var pushResult = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: price
    }
    result.push(pushResult);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
