const display = document.getElementById('display');

function appendToDisplay(input) {
    if (input === '%') {
        display.value = (parseFloat(display.value) / 100).toString();
    } else {
        display.value += input;
    }
}

function reset() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}

function clearEntry() {
    display.value = display.value.slice(0, -1) || '';
}
