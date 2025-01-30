// WAP to check the given number is divisible by 7.

// Declaration of variable.
let num;

// User-Input.
num = prompt("Enter the number:");

// Converting into number.
num = parseInt(num);

// Operation.
if (num % 7 == 0) {
    console.log(`${num} is divisible by 7.`);
}
else {
    console.log(`${num} is not divisible by 7.`);
}