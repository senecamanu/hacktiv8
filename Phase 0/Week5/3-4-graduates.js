function graduates (students) {
  // make the array
  var arr = [];
  for (let i = 0; i < students.length; i++) {
    if (arr.length == 0) {
      arr.push(students[i].class);
    }
    else {
      var trueNot = false;
      for (let c = 0; c < arr.length; c++) {
        if (arr[c] == students[i].class) {
          trueNot = false;
          break;
        }
        else {
          trueNot = true;
        }
      }
      if (trueNot == true) {
        arr.push(students[i].class);
      }
    }
  }

  // make the object
  var obj = {};
  for (let n = 0; n < arr.length; n++) {
    obj[arr[n]] = [];
  }

  // pushing graduates to object's array
  for (let z = 0; z < arr.length; z++) {
    for (let p = 0; p < students.length; p++) {
      if (arr[z] == students[p].class) {
        if (students[p].score > 75) {
          delete students[p].class;
          obj[arr[z]].push(students[p]);
        }
      }
    }
  }

  return obj;
}
