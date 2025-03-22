const btn = document.querySelector('#btn');
const body = document.querySelector('body');
let print = document.querySelector('.print');
const copy = document.querySelector('.copy');

btn.addEventListener('click', () => {
    let color_code = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = '#' + color_code;
    btn.innerHTML = 'Change Colour';
    print.innerHTML = '#' + color_code;
    copy.style.display = 'block';
});

copy.addEventListener('click', () => {
    const colorText = print.innerHTML;
    navigator.clipboard?.writeText(colorText) || document.execCommand('copy');

    copy.innerHTML = 'Copied!';
    setTimeout(() => copy.innerHTML = 'Copy', 900);
});