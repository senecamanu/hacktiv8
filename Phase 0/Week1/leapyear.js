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
