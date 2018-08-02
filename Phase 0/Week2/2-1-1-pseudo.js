//newton second law
var m = Number(prompt("what is the mass? (in kg)"));
var a = Number(prompt("what is the acceleration? (in m/s2)"));
var sigmaf = m*a;

alert(sigmaf);

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

leapyear(4)

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
