//FLEXIBLE CODE
var name = '';
var role = '';

if (name == '' && role == '') {
  console.log("Nama dan peran harus diisi!");
}

else if (name.length > 1 && role == '') {
  console.log('Halo ' + name + ', pilih peranmu untuk memulai game!');
}

else if (name == '' && role.length > 1) {
  console.log("nama harus diisi!");
}

else if (name.length > 1 && role == 'Ksatria' ) {
  console.log('Selamat datang di Dunia Proxytia, ' + name + '.');
  console.log('Halo ' + role + ' ' + name + ', kamu dapat menyerang dengan senjatamu!');
}
else if (name.length > 1 && role == 'Tabib' ) {
  console.log('Selamat datang di Dunia Proxytia, ' + name + '.');
  console.log('Halo ' + role + ' ' + name + ', kamu akan membantu temanmu yang terluka.');
}
else if (name.length > 1 && role == 'Penyihir' ) {
  console.log('Selamat datang di Dunia Proxytia, ' + name + '.');
  console.log('Halo ' + role + ' ' + name + ', ciptakan keajaiban yang membantu kemenanganmu!');
}

else {
  console.log('tetot. error!');
}
