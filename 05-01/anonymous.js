let lSegitiga = (x, y) => 0.5 * (x * y);

console.log(lSegitiga(2, 2));

let grade = (x) => {
    if (x == 0) {
        return 'F';
    }
    if (x >= 1 && x <= 30) {
        return 'E';
    }
    if (x >= 31 && x <= 50) {
        return 'D';
    }
    if (x >= 51 && x <= 70) {
        return 'C';
    }
    if (x >= 71 && x <= 80) {
        return 'B';
    }
    if (x >= 81 && x <= 100) {
        return 'A';
    }
}

console.log(grade(lSegitiga(10, 10)));

