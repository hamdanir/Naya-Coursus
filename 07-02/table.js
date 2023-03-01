// console.log(document.getElementsByTagName('tr'));

// const table = document.getElementById('mytable').innerText;
// console.table(table);

// const table2 = document.getElementsByTagName('thead')[0].innerText;
// const tbody = document.getElementsByTagName('tbody')[0].innerText;
// console.log(table2);
// console.log(tbody);

// const table3 = { thead: document.getElementsByTagName('thead')[0].innerText, tbody: document.getElementsByTagName('tbody')[0].innerText };
// console.log(table3);

// const thead = []
// thead[0] = document.getElementsByTagName('thead')[0].innerText;
// console.table(thead);

// const coba = {
//     no: document.getElementsByTagName('tbody')[0].innerText
// }

// console.table(coba)

const table4 = document.getElementById("mytable");
const data = [];
// Ambil baris tabel di dalam elemen tbody
const rows = table4.tBodies[0].rows;

// Loop melalui baris tabel
for (let i = 0; i < rows.length; i++) {
    // Ambil sel di dalam baris
    const cells = rows[i].cells;

    // Tampilkan nilai sel ke console
    // console.log(cells[0].textContent, cells[1].textContent, cells[2].textContent);
    const rowData = {
        no: cells[0].textContent,
        nama: cells[1].textContent,
        nilai: cells[2].textContent,
        alamat: cells[3].textContent,
        ket: cells[4].textContent,

    };

    data.push(rowData);
}
console.table(data);
