function cariModus(arr) {
  var modes = [], count = [], i, number, maxIndex = 0;

      for (i = 0; i < arr.length; i += 1) {
          number = arr[i];
          count[number] = (count[number] || 0) + 1;
          if (count[number] > maxIndex) {
              maxIndex = count[number];
          }
      }

      for (i in count)
          if (count.hasOwnProperty(i)) {
              if (count[i] === maxIndex) {
                  modes.push(Number(i));
              }
          }

      var testCounter = false;
      for (let c = 0; c < modes.length; c++) {
        if (modes[0] == arr[c]) {
          testCounter = true;
        }
        else {
          testCounter = false;
        }
      }

      if (modes.length == arr.length || testCounter == true) {
        return -1;
      }

      else {
        return modes[0];
      }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
