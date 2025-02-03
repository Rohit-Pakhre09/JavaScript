// WAP to check whether the given number is maximum or minimum with 3 numbers in Javascript.

// Declaration of variable.
let a, b, c;

// User-Input.
a = prompt("Enter the first number: ");
b = prompt("Enter the second number: ");
c = prompt("Enter the third number: ");

// Converting into number.
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

// Operation for maximum number.
// Logic between a & b, who is greater.
if (a > b) {

    // Logic between a & c, who is greater.
    if (a > c) {
        console.log(`${a} is a maximum number.`);
    } else {
        console.log(`${c} is a maximum number.`);
    }

} else {

    // Logic between b & c, who is greater.
    if (b > c) {
        console.log(`${b} is a maximum number.`);
    } else {
        console.log(`${c} is a maximum number.`);
    }

}


// Operation for minimum number.
// Logic between a & b, who is greater.
if (a < b) {

    // Logic between a & c, who is greater.
    if (a < c) {
        console.log(`${a} is a minimum number.`);
    } else {
        console.log(`${c} is a minimum number.`);
    }

} else {

    // Logic between b & c, who is greater.
    if (b < c) {
        console.log(`${b} is a minimum number.`);
    } else {
        console.log(`${c} is a minimum number.`);
    }

}