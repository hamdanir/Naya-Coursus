
// Lingkaran 1
const r1 = 2;
const d1 = 2;
const pi = 3.14;
// Luas Lingkaran 1
let l_Lingkaran1 = (pi * r1 * r1) / 2;


//  Lingkaran 2 
const r2 = 2;
const d2 = 12;
let l_Lingkaran2 = (pi * r2 * r2) / 2;

// Persegi panjang 1 , Balok 1 dan Segitiga 1
const alas1 = 5;
const tinggi1 = 7;
const lebar1 = 3;
let l_perpanjang1 = alas1 * tinggi1;
let l_segitiga1 = 0.5 * alas1 * tinggi1;
let v_balok1 = alas1 * tinggi1 * lebar1;

// Persegi panjang 2, Balok 2 dan Segitiga 2
const alas2 = 7;
const tinggi2 = 8;
const lebar2 = 3;
let l_perpanjang2 = alas2 * tinggi2;
let l_segitiga2 = 0.5 * alas2 * tinggi2;
let v_balok2 = alas2 * tinggi2 * lebar2;

// Volome Tabung
let v_tabung1 = pi * (r1 ** 2) * tinggi1;
let v_tabung2 = pi * (r2 ** 2) * tinggi2;

console.log("Lingkaran 1 =", l_Lingkaran1);
console.log("Lingkaran 2 =", l_Lingkaran2);
if (l_Lingkaran1 == l_Lingkaran2) {
    console.log("Nilai antara Lingkaran 1 dan 2 adalah SAMA")
}
else {
    console.log("Nilai antara Lingkaran 1 dan 2 adalah BEDA")
};


if (l_Lingkaran1 == 0) {
    console.log("Nilai Lingkaran 1 adalah E")
}
else if (l_Lingkaran1 >= 1 && l_Lingkaran1 <= 39) {
    console.log("Nilai Lingkaran 1 adalah D")
}
else if (l_Lingkaran1 >= 40 && l_Lingkaran1 <= 59) {
    console.log("Nilai Lingkaran 1 adalah C")
}
else if (l_Lingkaran1 >= 60 && l_Lingkaran1 <= 79) {
    console.log("Nilai Lingkaran 1 adalah B")
}
if (l_Lingkaran1 >= 80 && l_Lingkaran1 <= 100) {
    console.log("Nilai Lingkaran 1 adalah A")
};

if (l_Lingkaran2 == 0) {
    console.log("Nilai Lingkaran 2 adalah E")
}
else if (l_Lingkaran2 >= 1 && l_Lingkaran2 <= 39) {
    console.log("Nilai Lingkaran 2 adalah D")
}
else if (l_Lingkaran2 >= 40 && l_Lingkaran2 <= 59) {
    console.log("Nilai Lingkaran 2 adalah C")
}
else if (l_Lingkaran2 >= 60 && l_Lingkaran2 <= 79) {
    console.log("Nilai Lingkaran 2 adalah B")
}
if (l_Lingkaran2 >= 80 && l_Lingkaran2 <= 100) {
    console.log("Nilai Lingkaran 2 adalah A")
};

console.log("Persegi panjang 1 =", l_perpanjang1);
console.log("Persegi panjang 2 =", l_perpanjang2);
if (l_perpanjang1 == l_perpanjang2) {
    console.log("nilai anatara Persegi panjang 1 dan 2 adalah SAMA")
}
else {
    console.log("nilai anatara Persegi panjang 1 dan 2 adalah BEDA")
};

console.log("Segitiga 1 =", l_segitiga1);
console.log("Segitiga 2 =", l_segitiga2);
console.log("Volume Balok 1 =", v_balok1);
console.log("Volume Balok 2 =", v_balok2);
console.log("Volume Tabung 2 =", v_tabung1);
console.log("Volume Tabung 2 =", v_tabung2);

