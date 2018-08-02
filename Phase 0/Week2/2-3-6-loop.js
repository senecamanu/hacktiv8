// PROBLEM 1
var counter = 1;

while (counter <= 100) {
  if (counter % 2 == 1) {
    console.log("GANJIL");
  }
  else {
    console.log("GENAP");
  }
  counter++;
}

// PROBLEM 1.1 (modified version so it looks clearer)

var counter = 1;

while (counter <= 100) {
  if (counter % 2 == 1) {
    console.log(counter + " ADALAH GANJIL");
  }
  else {
    console.log(counter + " ADALAH GENAP");
  }
  counter++;
}

// PROBLEM 2 (KELIPATAN 2)

var counter2 = 1;

while (counter2 <= 100) {
  if (counter2 % 3 == 0) {
    console.log(counter2 + " KELIPATAN 3");
  }
  else {
    console.log("");
  }
  counter2 = counter2 + 2;
}

// PROBLEM 3 (KELIPATAN 5)

var counter3 = 1;

while (counter3 <= 100) {
  if (counter3 % 6 == 0) {
    console.log(counter3 + " KELIPATAN 6");
  }
  else {
    console.log("");
  }
  counter3 = counter3 + 5;
}

// PROBLEM 4 (KELIPATAN 9)

var counter4 = 1;

while (counter4 <= 100) {
  if (counter4 % 10 == 0) {
    console.log(counter4 + " KELIPATAN 10");
  }
  else {
    console.log("");
  }
  counter4 = counter4 + 9;
}

// PROBLEM 5 (KELIATAN 2, 5 DAN 9)

var counter5 = 1;

while (counter5 <= 100) {
  if (counter5 % 10 == 0) {
    console.log(counter5 + " KELIPATAN 10");
  }
  else if (counter5 % 6 == 0) {
    console.log(counter5 + " KELIPATAN 6");
  }
  else if (counter5 % 3 == 0) {
    console.log(counter5 + " KELIPATAN 3");
  }
  else {
    console.log("");
  }
  counter5++;
}
