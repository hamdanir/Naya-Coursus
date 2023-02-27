const pembagiError = '';
const inputanError = '';

// const pembagi = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (b === 0) {
//                 const err = new Error('Inputan tidak boleh 0!');
//                 err.name = pembagiError;
//                 reject(err);
//             }
//             else if (typeof a !== 'number' || typeof b !== 'number') {
//                 const err = new Error('Inputan harus Angka!!');
//                 err.name = inputanError;
//                 reject(err);
//             }
//             else resolve(a / b)
//         }, 2000);
//     });
// };

const pembagi = (a, b) => {
    return new Promise((resolve, reject) => {

        if (b === 0) {
            setTimeout(() => {
                const err = new Error('Inputan tidak boleh 0!');
                err.name = pembagiError;
                reject(err);
            }, 4 * 1000) // 1000 = 1s
        }
        else if (typeof a !== 'number' || typeof b !== 'number') {
            setTimeout(() => {
                const err = new Error('Inputan harus Angka!!');
                err.name = inputanError;
                reject(err);
            }, 2 * 1000) // 1000 = 1s
        }
        else resolve(a / b)

    });
};


const main = async () => {
    try {
        const hasil = await pembagi(3, 1);
        console.log(hasil);
    } catch (err) {
        console.log(err);
    }
};

main();

const cobaAwait = async () => {
    try {
        const hasil = await Promise.all([
            pembagi(4, 2),
            pembagi(4, 1),
            pembagi(4, 4),
        ]);
        console.log(hasil);
    } catch (err) {
        console.log(err);
    }
};

// cobaAwait();

const cobaAwait2 = async () => {
    try {
        const hasil = await Promise.race([
            pembagi(4 * 2 * 2, 8 + 2 + 5 - 10),
            pembagi(4, 1),
            pembagi(4, 3),
        ]);
        console.log(hasil);
    } catch (err) {
        console.log(err);
    }
};

// cobaAwait2();

const cobaAwait3 = async () => {
    try {
        const hasil = await Promise.allSettled([
            pembagi(4 * 2 * 2, 8 + 2 + 5 - 10),
            pembagi(4, 2),
            pembagi(4, 0),
        ]);
        hasil.filter(h => h.status == 'fulfilled').forEach(h => {
            console.log(h.value)
            console.log(h);
        });

    } catch (err) {
        console.log(err);
    }
};

// cobaAwait3();

// Promise.allSettled([
//     pembagi(4, 2),
//     pembagi(4, 4),
//     pembagi(4, 1),
// ])
//     .then(hasil => {
//         console.log(hasil);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Promise.race([
//     pembagi(4, 1),
//     pembagi(4, 2),
//     pembagi(4, 4),
// ])
//     .then(hasil => {
//         console.log(hasil);
//     })
//     .catch(err => {
//         console.log(err);
//     });