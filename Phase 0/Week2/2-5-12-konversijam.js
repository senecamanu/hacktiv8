function konversiMenit(n) {
var num = n;
var hours = (num / 60);
// dari floating jadiin integer biasa
var rhours = Math.floor(hours);
// bikin menit pake jam int - jam floating
var minutes = (hours - rhours) * 60;
//rounding minutes
var rminutes = Math.round(minutes);
//tambah 0 depannya menit
var rminutes2digits = ("0" + rminutes).slice(-2);
return rhours + ":" + rminutes2digits;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
