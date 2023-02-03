console.log("Belajar operator")

let alas = 5;
let tinggi = 10;
let l = 2;
let ab = 3;
let bc = 4;
let ac = 5;
let r = 5;
let d = 10;
let pi = 3.14;

console.log('alas =', alas);
console.log('tinggi =', tinggi);
console.log('lebar =', l);
console.log('sisi AB =', ab);
console.log('sisi BC =', bc);
console.log('sisi AC=', ac);
console.log('jari-jari =', r);
console.log('diameter =', d);

// Luas Segitiga
console.log("luas Segitiga");
let luas_segitiga = 0.5 * alas * tinggi;
console.log(luas_segitiga);

// Keliling Sgitiga
console.log("kelilingSegitiga");
let keliling_segitiga = ab + bc + ac;
console.log(keliling_segitiga);

// luas Persegi Panjang
console.log("luas Persegi panjang");
let luas_persegipanjang = alas * tinggi;
console.log(luas_persegipanjang);

// keliling Persegi Panjang 
console.log("keliling Persegi Panjang");
let keliling_persegipanjang = (ab + bc) * 2;
console.log(keliling_persegipanjang);

// Luas Lingkaran
console.log("Luas Lingkaran");
let luas_lingkaran = (pi * r * r)/2; 
console.log(luas_lingkaran);

// Keliling Lingkaran
console.log("keliling lingkaran");
let keliling_lingkaran = pi * (r + r);
console.log(keliling_lingkaran);

// Keliling Balok
console.log("keliling balok tanpa tutup");
let k_balok = 4 * (alas + tinggi + l);
console.log(k_balok);

// luas Balok
console.log("Luas Balok");
let l_balok = alas * tinggi * l;
console.log(l_balok);

// Keliling Tabung
console.log("Keliling Tabung");
let k_tabung = 2 * ((2 * r) + tinggi);
console.log(k_tabung);

// Luas Tabung
console.log("Luas Tabung");
let l_tabung = luas_lingkaran * tinggi;
console.log(l_tabung);

console.log("aku ");