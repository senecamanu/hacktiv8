function xo(s) {

  var x = 0;
  var o = 0;
  var ssplit = s.split('');
  var scount = 0;

// while loop
  while(scount < s.length) {
    if (ssplit[scount] == 'x') {
      x++;
    }

    else {
      o++;
    }
    scount++;
  }

  if (x == o) {
    return true;
  }

  else {
    return false;
  }

}

console.log(xo('xooxox'));
