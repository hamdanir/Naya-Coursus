// class lingkaran {

//     jariJari;

//     luas = () => this.jariJari ** 2 * 3.14;
//     keliling = () => 3.14 * (this.jariJari + this.jariJari);

// };

// const bunder = new lingkaran();
// bunder.jariJari = 6;
// console.log('luas =', bunder.luas());
// console.log('keliling =', bunder.keliling());


// class persegi {
//     panjang;
//     lebar;

//     luas = () => this.panjang * this.lebar;
//     keliling = () => (this.panjang + this.lebar) * 2;

// };

// const adudu = new persegi();
// adudu.panjang = 2;
// adudu.lebar = 4;
// console.log('luas =', adudu.luas());
// console.log('keliling =', adudu.keliling());


// penambahan cunstructor

class lingkaran {
    constructor(jariJari) {
        this.jariJari = jariJari;
    }
    luas = () => this.jariJari ** 2 * 3.14;
    keliling = () => 3.14 * (this.jariJari + this.jariJari);
};
const bunder = new lingkaran(3);
console.log(bunder.luas());
console.log(bunder.keliling());

class persegi {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas = () => this.panjang * this.lebar;
    keliling = () => (this.panjang + this.lebar) * 2;
};
const adudu = new persegi(2, 4);
console.log(adudu.luas());
console.log(adudu.keliling());