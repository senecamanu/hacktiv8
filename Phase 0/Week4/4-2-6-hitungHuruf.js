function hitungHuruf(kata) {
  
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

//PSEUDO
SPLIT the sentence into MASTER ARRAY by space
FOR each array index
  PUSH that letter into an array that with the letter as variable
    IF an array is already filled, dont make new array, just fill in
AFTER the entire array is finished, push the array length into a new array
AFTER pushed, look at the largest number (how?)
PULL the same element position from the original array (the sentence)
RETURN that element
