function xo(str) {
  var x = 0, o = 0;

  for(let i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
      x++;
    }
    else {
      o++;
    }
  }

  if (x == o) {
    return true;
  }
  else {
    return false;
  }
}
console.log(xo('xooxox'));
