function cariModus(arr) {

var parentMode = [];
var childMode = [];
var tempResult = 0;
var result = [];

parentMode[0].push(arr[0]);

for(i = 1; i < arr.length; i++) {

  for(c = 0; c < parentMode.length; c++) {
    if(arr[i] == parentMode[c][0]) {
      parentMode[c].push(arr[i]);
    }
    else {
      childMode = [arr[i]];
      parentMode.push(arr[i]);
    }
  }

  if (parentMode.length <= 1) {
    return -1;
  }

  else {
    for (x = 0; x < parentMode.length; x++) {
      if (parentMode[x].length > tempResult) {
        result = parentMode[x][0];
      }
    }
  }
}

return result;

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

// PSEUDO
MAKE parent array
MAKE new array every new number
  PUSH to parent array
    IF that array already existed
      THEN just push to the already existing array
AFTER full array done, check the one with longest array element
  IF > 1 array with same array element
    THEN pick the array that COMES FIRST IN parent array
