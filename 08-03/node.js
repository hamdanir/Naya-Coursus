// require('./data2.json')
//     //     // Meneruskan respons sebagai JSON
//     .then(response => response.json())
//     //     // Menangani data JSON yang diuraikan
//     .then(data => console.log(data))
//     //     // Menangani kesalahan jika terjadi
//     .catch(error => console.error(error));


// const data = require('./data2.json');


// let cari = (data, key) => {
//     if (key in data) {
//         return data[key];
//     } else {
//         return 'Tidak Ditemukan';
//     }
// }

// console.log(cari(data, 'title'));


const fs = require('fs');

// membaca file JSON
fs.readFile('data2.json', 'utf8', (err, data) => {
    if (err) throw err;


    const obj = JSON.parse(data);

    const keys = Object.keys(obj);
    const targetKey = 'id';

    if (keys.includes(targetKey)) {
        console.log(`${targetKey}: ${obj[targetKey]}`);
    } else {
        console.log(`Key ${targetKey} tidak ditemukan dalam file JSON`);
    }
});

