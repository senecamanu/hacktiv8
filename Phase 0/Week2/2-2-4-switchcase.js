var hariInput = 21;
var bulanAngka = 2;
var tahunInput = 1945;

// HARI

// kalo error hari, tapi simple version ga masukin perhitungan 30-31-29-28 tergantung tahun
if (hariInput > 31) {
  hari = '(hari salah)';
}
else {
  hari = hariInput;
}

//TAHUN

// kali aja tahunnya negatif
if (tahunInput < 0) {
  tahun = Math.abs(tahunInput);
} else {
  tahun = tahunInput
}

// BULAN

// ganti ke string buat bulan
var bulan = bulanAngka.toString();

// switch case buat bulan biar nama bukan angka pas di print
switch (bulan) {
  case '1' :
  bulan1 = 'January';
  break;
  case '2' :
  bulan1 = 'February';
  break;
  case '3' :
  bulan1 = 'March';
  break;
  case '4' :
  bulan1 = 'April';
  break;
  case '5' :
  bulan1 = 'May';
  break;
  case '6' :
  bulan1 = 'June';
  break;
  case '7' :
  bulan1 = 'July';
  break;
  case '8' :
  bulan1 = 'August';
  break;
  case '9' :
  bulan1 = 'September';
  break;
  case '10' :
  bulan1 = 'October';
  break;
  case '11' :
  bulan1 = 'November';
  break;
  case '12' :
  bulan1 = 'January';
  break;
  default:
  console.log('(bulan salah)');
}

console.log(hari + " " + bulan1 + " " + tahun);
