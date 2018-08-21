function changeMe(arr) {

  for(i = 0; i < arr.length; i++) {
    var result = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3],
    }

    if(result.age == undefined) {
      result.age = 'Invalid Birth Year';
    }

    console.log(
      `${i + 1}. ${result.firstName} ${result.lastName}:`, result);

  }
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);


// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }


// changeMe([]); // ""
