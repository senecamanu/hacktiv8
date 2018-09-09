/*
days = untuk nanti console.log
instructorCount = awalnya diisi dengan 0. setelah 1, gabisa dipake lagi
*/

function generateSchedule(instructor, weeks) {
    for (let i = 1; i <= weeks; i++) {
        let days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
        let instructorCount = instructor;

        //console.log
        for (let c = 0; c < 7; c++) {
            if (c === 5 || c === 6) {
                console.log(`Week ${i} - ${days[c]}: Libur`);
            }

            else {
                console.log(`Week ${i} - ${days[c]}: `);
            }
        }

        //break line
        console.log(`\n` + '----------------------' + `\n`)
    }
}

let instructorNames = ['Rifki', 'Windi', 'Dimtri']
generateSchedule(instructorNames, 3)