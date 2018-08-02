


//CODE
function mengelompokkanAngka(arr) {
  var parent = [];
  var genap = [];
  var ganjil = [];
  var lipat3 = [];

  for(i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      genap.push(arr[i]);
    }

    else if(arr[i] % 2 == 1) {
      ganjil.push(arr[i]);
    }

    if(arr[i] % 3 == 0) {
      lipat3.push(arr[i]);
    }
  }
  parent.push(genap, ganjil, lipat3);
  return parent;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

//PSEUDO
bikin kaya animalGroup:

variable '223'
condition 1 (genap)
  IF all those numbers % 2 = 1
    THEN put into array 0
    after everything, PUSH to array LARGE

condition 2 (ganjil)
  sama aja sama condition1

condition 3 (kelipatan 3)
  IF all those numbers % 3 = 0
    THEN put into array 2
    after everything, PUSH to array LARGE
