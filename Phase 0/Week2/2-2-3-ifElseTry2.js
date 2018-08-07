//FLEXIBLE CODE
var name = 'mifzan';
var role = '';

if (name == '' && role == '') {
  console.log("Nama dan peran harus diisi!");
}

if (name.length > 1 && role == '') {
  console.log("peran harus diisi!");
}

else if (role == '') {
  console.log("Halo " + name + ", Pilih peranmu untuk memulai game!");
  console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");
}

else if (role == 'Ksatria') {
  console.log("Selamat datang di Dunia Proxytia, " + name + ".");
  console.log("Halo Ksatria " + name + ", kamu dapat menyerang dengan senjatamu!");
}

else if (role == 'Tabib') {
  console.log("Selamat datang di Dunia Proxytia, "+ name +".");
  console.log("Halo Tabib " + name + ", kamu akan membantu temanmu yang terluka.");
}

else if (role == 'Penyihir') {
  console.log("Selamat datang di Dunia Proxytia, "+ name +".");
  console.log("Halo Penyihir " + name + ", ciptakan keajaiban yang membantu kemenanganmu!");
}

else {
  console.log('tetot. error!');
}
