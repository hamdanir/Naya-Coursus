// let btn = document.querySelector('button');
// let div = document.querySelector('div');


// let counter = 5;

// const countdown = setInterval(function () {
//     console.log(counter);
//     counter--;
//     if (counter < 0) {
//         clearInterval(countdown);
//         console.log('Waktu habis!');
//     }

// }, 1000);

// console.log(seconds);

// btn.addEventListener('click', () => {

//     const count = document.createElement('p');
//     const countdown = setInterval(function () {
//         console.log(counter);
//         counter--;
//         if (counter < 0) {
//             clearInterval(countdown);
//             console.log('Waktu habis!');
//         } else {
//             div.appendChild(count);
//         }


//     }, 1000);
//     count.innerHTML = countdown;
// })

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let counter = 7;
    const interval = setInterval(() => {
        counter--;
        if (counter === 0) {
            const element = document.querySelector('div');
            element.style = 'display: none;'

            const img = document.createElement('img');
            document.body.appendChild(img);
            img.src = 'https://lzd-img-global.slatic.net/g/p/298a51d1094d8ae389eef0621d869246.png_720x720q80.png_.webp';

            clearInterval(interval);
        } else {
            let text = document.querySelector('span');
            if (counter === 6) {
                text.innerHTML = '...';
            } else {
                text.innerHTML = counter;
            }
        }

    }, 1000)

})