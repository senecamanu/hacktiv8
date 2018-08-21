function shoppingTime(memberId, money) {
  // you can only write your code here!
  var products = {
    productName: ['Stacattu', 'Zoro', 'H&N', 'Uniklooh', 'Casing Handphone'],
    productPrice: [1500000, 500000, 250000, 175000, 50000]
  }

  var moneyTemp = money

  var result = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: money
  }

  if(memberId === undefined) {
    result = 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  else if(memberId.length >= 1) {
    for (i = 0; i < products.productName.length; i++) {
      if (moneyTemp > products.productPrice[i]) {
        result.listPurchased.push(products.productName[i]);

        moneyTemp -= products.productPrice[i];
        result.changeMoney -= products.productPrice[i];
      }
    }
  }

  else {
    result = 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  if (result.listPurchased == 0) {
    result = 'Mohon maaf, uang tidak cukup'
  }
    return result;
  
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
