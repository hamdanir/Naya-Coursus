const gagalCari = 'Tidak ada cuy';
const pencari = (a) => {
    return new Promise((resolve, reject) => {
        if (a == null) {
            const err = new Error('penulisan elemen mungkin typo');
            err.name = gagalCari;
            reject(err);
        }
        else {
            console.log('ada');
        }
    })
};

const main = async () => {
    try {
        const hasil = await pencari(document.getElementById('title'));
        console.log(hasil);
    } catch (err) {
        console.log(err);
    }
};

main();

// check = (lmen) => {
//     if (lmen !== null) {
//         return 'ada'
//     }
//     else {
//         throw new Error('Tidak ada boy');
//     }
// };

// console.log(check(document.getElementById('title')));

console.log(document.getElementsByTagName('li'))

const num1 = Number(document.getElementById('a1').innerHTML);
const num2 = Number(document.getElementById('a2').innerHTML);
const num3 = Number(document.getElementById('a3').innerHTML);
const num4 = Number(document.getElementById('a4').innerHTML);
const num5 = Number(document.getElementById('a5').innerHTML);
let jum = num1 + num2 + num3 + num4 + num5;
console.log(jum);

const angka = Number(document.getElementsByTagName('li').innerHTML);
console.log(angka);

const num = Number(document.querySelectorAll('a').innerHTML);
console.log(num)



