const number = document.getElementById('number');

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
let counter = 0;
let reset = "";

button1.addEventListener('click', () => {
    counter++;
    number.innerHTML = counter
})

button2.addEventListener('click', () => {
    if (counter == 0) {
        number.innerHTML = 'You are Substracting with 0 (Zero)'
    } else {
        counter--;
        number.innerHTML = counter
    }
});

button3.addEventListener('click', () => {
    if (counter == 0) {
        number.innerHTML = 'You are Multipling with 0 (Zero)'
    } else {
        counter *= 2;
        number.innerHTML = counter
    }
});

button4.addEventListener('click', () => {
    if (counter == 0) {
        number.innerHTML = 'You are Dividing with 0 (Zero)'
    } else {
        counter /= 2;
        number.innerHTML = counter
    }
});

button5.addEventListener('click', () => {
    counter = 0;
    number.innerHTML = counter;
});
