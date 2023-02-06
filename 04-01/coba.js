function hitungLuasLingkaran () {
    let luas = 3.14 * 3**2;
    if (luas === 0) {
      return 'E';
    } else if (luas >= 1 && luas <= 39) {
      return 'D';
    } else if (luas >= 40 && luas <= 59) {
      return 'C';
    }
  }

let nilai = hitungLuasLingkaran();
console.log(nilai);