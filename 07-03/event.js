let email = '';
let password = '';
const div1 = document.querySelector('.div1')

const berhasil = () => {
    formLogin.style = 'display:none';
    const h1 = document.createElement('h1');
    div1.appendChild(h1);
    h1.innerHTML = 'SELAMAT DATANG';
};

const gagal = () => {
    const p = document.createElement('p');
    div1.appendChild(p);
    p.innerHTML = 'email atau password salah';
    p.style = 'color:red;'
};

const formLogin = document.querySelector('#form-login');
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