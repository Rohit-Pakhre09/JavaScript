// WAP to check the given number is odd number by using For loop in Javascript.

// Declaration of variable.
let a = prompt("Enter any number: "), i;

// Converting into number.
a = parseInt(a);

// Operation by using For loop.
document.write("Operation by using For Loop.<br><br>"); // By using document.write();
for (i = 1; i <= a; i++) {

    // Checks the condition thats is odd or not.
    if ((i % 2 == 1)) {
        document.write(`${i} is an Odd number.<br>`);
    }

}

console.log("Operation by using For Loop.\n\n"); // By using console.log();
for (i = 1; i <= a; i++) {

    // Checks the condition thats is odd or not.
    if ((i % 2 == 1)) {
        console.log(`${i} is an Odd number.\n`);
    }

}