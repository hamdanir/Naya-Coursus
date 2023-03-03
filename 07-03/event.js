let email = '';
let password = '';
const div1 = document.querySelector('.div1')
const pesan = document.querySelector('#pesan');
const formLogin = document.querySelector('#form-login');
const box = document.querySelector('.box');

const berhasil = () => {
    box.style = 'border:none;';
    formLogin.style = 'display:none';
    const img = document.createElement('img');
    div1.appendChild(img);
    img.src = 'https://lzd-img-global.slatic.net/g/p/298a51d1094d8ae389eef0621d869246.png_720x720q80.png_.webp';
};

const gagal = () => {
    const p = document.createElement('p');
    pesan.appendChild(p);
    p.innerHTML = 'email atau password salah';
    p.style = 'color:red;'
};


formLogin.addEventListener('submit', evt => {
    evt.preventDefault();

    if (email == 'kung@kang.com' && password == 'kakung') {
        berhasil();
    } else gagal();
});

const inMail = document.querySelector('#email');
inMail.addEventListener('keyup', evt => {
    email = evt.target.value;
});

const inPassword = document.querySelector('#password');
inPassword.addEventListener('keyup', evt => {
    password = evt.target.value;
});