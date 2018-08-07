//PSEUDO NEWTON 2ND law
FIND mass
  IF not in kilogram, convert to kg
FIND acceleration
  IF not in m/s2, convert to m/s2
CALCULATE ΣF = mass multiply by acceleration (vice versa)

leapyear(4)
//PSEUDO YEAR
VAR year = insert year
IF year is % 100 = 0
  THEN year % 400
    IF result is 0 = the year is a leap year
    ELSE = no, it is not a leap year
IF year % 100 is not 0
  THEN year % 4
    IF result is 0 = the year is a leap year
    ELSE = no, it is not a leap year


//PSEUDO LAUNDRY
VAR laundry = 20 (this is the laundry not inside the machine)
WHILE laundry is more than 0
  MOVE laundry into laundry machine


//PSEUDO KUKU
VAR murid = 40;
WHILE student is more than 0
  ASK if nails are in good condition
    IF yes THEN praise
    IF bad THEN punish
    REGARDLESS, after each student, murid is subtracted by 1

/////////////////
/////////////////
/////////////////
/////////////////

//kuku
// change var studentNum to 1 kalau mau test!
var studentNum = 40;

while (studentNum > 0) {
  // prompt untuk cek kualitas kuku
  var kuku = prompt("kuku kamu sehat? yes or no?");

  // kalau sehat
  if (kuku == "yes") {
    alert("good.");
    studentNum--;
  }
  // kalau tidak sehat
  else if (kuku == "no") {
    alert("bad. kamu kena hukum.");
    studentNum--;
  }
  // jawaban diluar dari itu
  else {
    alert("aku gak ngerti.");
  }
}

//laundry
var outLaundry = 20;
var inLaundry = 0;

while (outLaundry > 0) {
  console.log("we still got " + outLaundry + " clothes to go!");
  console.log("inserting 1 cloth~");
  outLaundry--;
  inLaundry++;
  console.log(inLaundry + " clothes inside!");
}

//leap year

// var year = prompt("what is the year?");
function leapyear(year) {
  if(year % 100 == 0) {
      if(year % 400 == 0) {
        alert("yes, this is a leap year");
      }
      else {
        alert("nah");
      }
  }
  else if(year % 4 == 0) {
      alert("yes, this is a leap year");
  }
  else {
    alert("nah");
  }
}

//newton second law
var m = Number(prompt("what is the mass? (in kg)"));
var a = Number(prompt("what is the acceleration? (in m/s2)"));
var sigmaf = m*a;

alert(sigmaf);
