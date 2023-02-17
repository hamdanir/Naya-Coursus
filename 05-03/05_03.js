// const siswa = { nama: 'kung', kelas: 7 };
// console.log(siswa.nama);
// siswa.nama = 'kugkang';
// console.log(siswa.nama);
// siswa.alamat = 'rumah';
// console.log(siswa.alamat);
// console.log(siswa);
// console.log(Object.keys(siswa));
// console.log(Object.values(siswa));
// // const max = Object.keys(siswa).length;
// // for (let i = 0; i < keys.length; i++) {
// //     console.log[keys(i)];
// // }
// const murid = siswa;
// murid.nilai = 90;
// console.log(siswa);
// console.log(murid);

const car = { type: 'suv', merk: 'fortuner', bbm: 'solar', seat: 7 };
const bike = { type: 'hyper', merk: 'h2', seat: 2, roda: 2 };
// membuat fungsi untuk mngecek apakah object tersebut key tertentu atau tidak


let validasi = (obj, keys) => {
    if (obj[keys]) {
        return true;
    }
    else {
        return false;
    }
}

console.log(validasi(car, 'roda'));
// console.log(validasi(bike, 'roda'));

// Soal 2 : tampilkan hasil penjumlahan dari angka yang ada di dalam object
const siswa = { nama: 'kung', harian: 20, uts: 40, uas: 60 };

let sum = (x) => {
    let sum = 0;
    for (let val in x) {
        if (typeof x[val] === 'number') {
            sum += x[val];
        }
    }
    return sum;
};

console.log(sum(siswa));

