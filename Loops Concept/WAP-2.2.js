// WAP to print n to 1 number by using while loop in Javascript.

// Declaration of variable.
let a, i;

// User-Input.
a = prompt("Enter any number: ");

// Converting of number.
a = parseInt(a);

// Operation by using While loop.
document.write("Operation by using While loop.<br><br>"); // By using document.write();
i = a;
while (i >= 1) {
    document.write(i + "<br>");
    i--;
}

console.log("Operation by using While loop.\n\n"); // By using console.log();
i = a;
while (i >= 1) {
    console.log(i + "\n");
    i--;
}