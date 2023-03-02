const h1 = document.createElement('h1');
h1.innerHTML = 'TUGAS Memebuat Tabel dengan Javascript';
document.body.appendChild(h1);

h1.style = 'text-align: center;'

//Tag TABEL
const table = document.createElement('table');
table.id = 'mytable';
document.body.appendChild(table)
// membuat tag thead
const thead = document.createElement('thead');
table.appendChild(thead);
// membuat tad tr (Baris Pertama)
const tr1 = document.createElement('tr');
thead.appendChild(tr1);
// membuat Kolom th
const th1 = document.createElement('th');
th1.innerHTML = 'No';
tr1.appendChild(th1);

const th2 = document.createElement('th');
th2.innerHTML = 'Nama';
tr1.appendChild(th2);

const th3 = document.createElement('th');
th3.innerHTML = 'Alamat';
tr1.appendChild(th3);

// membuat baris body tabel
const tbody = document.createElement('tbody');
table.appendChild(tbody);
// membuat baris kedua
const tr2 = document.createElement('tr');
tbody.appendChild(tr2);
// membuat koolom isi baris 2 / data pertama
const td1 = document.createElement('td');
td1.innerHTML = '1';
tr2.appendChild(td1);

const td2 = document.createElement('td');
td2.innerHTML = 'Hamdan';
tr2.appendChild(td2);

const td3 = document.createElement('td');
td3.innerHTML = 'Bantul';
tr2.appendChild(td3);

// data ke 2
const tr3 = document.createElement('tr');
tbody.appendChild(tr3);

const td4 = document.createElement('td');
td4.innerHTML = '2';
tr3.appendChild(td4);

const td5 = document.createElement('td');
td5.innerHTML = 'Irfan';
tr3.appendChild(td5);

const td6 = document.createElement('td');
td6.innerHTML = 'Patalan';
tr3.appendChild(td6);

// data ke 3
const tr4 = document.createElement('tr');
tbody.appendChild(tr4);
const td7 = document.createElement('td');
td7.innerHTML = '3';
tr4.appendChild(td7);

const td8 = document.createElement('td');
td8.innerHTML = 'Wijaya';
tr4.appendChild(td8);

const td9 = document.createElement('td');
td9.innerHTML = 'Jetis';
tr4.appendChild(td9);

// console.log(document.getElementsByTagName('table'));

table.style = 'border: 1px solid #585656;'
tr1.style = `background-color: #04AA6D;
            color: white;`

// menamplkan sebuah image
const img = document.createElement('img');
document.body.appendChild(img);
img.src = '../02-01/img/motor1.png';