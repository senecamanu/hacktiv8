var name = 'Danu';
var role = 'Tabib';

if (name == '' && role == '') {
  console.log("Nama dan peran harus diisi!");
}

else if (name == 'Mikael' && role == '') {
  console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
  console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");
}

else if (name == 'Nina' && role == 'Ksatria') {
  console.log("Selamat datang di Dunia Proxytia, Nina");
  console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
}

else if (name == 'Danu' && role == 'Tabib') {
  console.log("Selamat datang di Dunia Proxytia, Danu");
  console.log("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");
}

else if (name == 'Zero' && role == 'Penyihir') {
  console.log("Selamat datang di Dunia Proxytia, Zero");
  console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");
}

else {
  console.log('tetot. error!');
}
