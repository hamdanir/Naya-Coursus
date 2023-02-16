const arrayKosong = [];

arrayKosong.push("bagus", "baru");

console.table(arrayKosong);
arrayKosong.push(123, 4567);

console.table(arrayKosong);

arrayKosong[0] = "good";

console.table(arrayKosong);

delete arrayKosong[1];

console.table(arrayKosong);

arrayKosong[1] = "Belajar";
console.table(arrayKosong);
console.info(arrayKosong[1]);
console.info(arrayKosong[3]);