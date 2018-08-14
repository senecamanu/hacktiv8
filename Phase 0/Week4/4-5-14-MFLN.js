function sorting(arrNumber) {
  // code di sini
  var sorted = arrNumber.reverse(arrNumber.sort());
  return sorted;
}

function getTotal(arrNumber) {
  // code di sini
  var result = { };
  for(var i = 0; i < arrNumber.length; i++) {
      if(!result[arrNumber[i]])
          result[arrNumber[i]] = 0;
      result[arrNumber[i]]++;
  }

  var resultIteration = result[arrNumber[0]];
  var resultNum = arrNumber[0];
  var ans = `angka paling besar adalah ${resultNum} dan jumlah kemunculan sebanyak ${resultIteration} kali`;

  if (arrNumber.length < 1) {
    ans = [];
  }
  return ans;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
