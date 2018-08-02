var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input[1] = input[1] + 'Elsharawy';
  input[2] = 'Provinsi ' + input[2];
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  var dateFull = input[3].toString();
  var dateSplit = dateFull.split("/");
    var dateMonth = dateSplit[1];
      switch(dateMonth) {
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
        case '05' :
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
  var dateDash = dateSplit.join("-");
  var name2 = input[1].split(" ");
  name2.splice(2, 1);
  var name3 = name2.join(" ");


//testing
  console.log(input);
  console.log(bulan1);
  console.log(dateSplit);
  console.log(dateDash);
  console.log(name3);
}

dataHandling2(input);



/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
