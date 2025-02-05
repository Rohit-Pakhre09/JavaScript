// WAP to check the given number is odd number by using While loop in Javascript.

// Declaration of variable.
let a = prompt("Enter any number: "), i;

// Converting into number.
a = parseInt(a);

// Operation by using While loop.
document.write("Operation by using While Loop.<br><br>"); // By using document.write();
i = 1;
while (i <= a) {

    // Checks the condition thats is odd or not.
    if ((i % 2 == 1)) {
        document.write(`${i} is an Odd number.<br>`);
    }

}

console.log("Operation by using While Loop.\n\n"); // By using console.log();
i = 1;
while (i <= a) {

    // Checks the condition thats is odd or not.
    if ((i % 2 == 1)) {
        console.log(`${i} is an Odd number.\n`);
    }

}