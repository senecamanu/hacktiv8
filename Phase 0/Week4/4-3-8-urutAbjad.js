function urutkanAbjad(string) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var master = '';

  for(var i = 0; i < alfabet.length; i++) {
    var kid = [];

    for(var c = 0; c < string.length; c++) {
      if(alfabet[i] == string[c]) {
        master += string[c];
      }
    }
  }
  return master;
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
