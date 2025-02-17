// WAP to check the given number is Positive, Negative or Neutral.

// Declaration of variable.
let num;

// User-Input.
num = prompt("Enter the number:");

// Converting into number.
num = parseInt(num);

// Operation.
if (num == 0) {
    console.log(`${num} is Neutral Number.`);
}
else if (num >= 1) {
    console.log(`${num} is Positive Number.`);
}
else {
    console.log(`${num} is Negative Number.`);
}