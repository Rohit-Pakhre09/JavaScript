// WAP to check the given number is odd number by using do..while loop in Javascript.

// Declaration of variable.
let a = prompt("Enter any number: "), i;

// Converting into number.
a = parseInt(a);

// Operation by using do..while loop.
document.write("Operation by using do..while Loop.<br><br>"); // By using document.write();
do {

    // Checks the condition thats is odd or not.
    if ((i % 2 == 1)) {
        document.write(`${i} is an Odd number.<br>`);
    }
    i++;

} while (i <= a);

console.log("Operation by using do..while Loop.\n\n"); // By using console.log();
do {

    // Checks the condition thats is odd or not.
    if ((i % 2 == 1)) {
        console.log(`${i} is an Odd number.\n`);
    }
    i++;

} while (i <= a);