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
