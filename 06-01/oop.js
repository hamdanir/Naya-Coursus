class lingkaran {
    // properti
    jariJari;


    // method
    luas = () => this.jariJari ** 2 * 3.14;
    keliling = () => 3.14 * (this.jariJari + this.jariJari);

};

const bunder = new lingkaran();
bunder.jariJari = 6;
console.log('luas =', bunder.luas());
console.log('keliling =', bunder.keliling());
// bunder.keliling;

class persegi {
    panjang;
    lebar;

    luas = () => this.panjang * this.lebar;
    keliling = () => (this.panjang + this.lebar) * 2;

};

const adudu = new persegi();
adudu.panjang = 2;
adudu.lebar = 2;
console.log('luas =', adudu.luas());
console.log('keliling =', adudu.keliling());

