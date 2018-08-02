function targetTerdekat(arr){
  var distance = arr.length;
  var targetO = 0;
  var targetX = 0;

  for(var c = 0; c < arr.length; c++) {
  }

  for(var o = 0; o < arr.length; o++) {
    if (arr[o] == 'o'){
      targetO = o;
    }
  }

  for(var x = arr.length; x > 0; x--) {
    if (arr[x] == 'x') {
      targetX = x;
      if (Math.abs(targetO - targetX) < distance) {
        distance = Math.abs(targetO - targetX);
      }
    }
  }

  if (arr.includes('x') == false) {
    distance = 0;
  }

  console.log(distance);
}



// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
