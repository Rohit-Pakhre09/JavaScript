// WAP to print n to 1 number by using for loop in Javascript.

// Declaration of variable.
let a, i = 1;

// User-Input.
a = prompt("Enter any number: ");

// Converting of number.
a = parseInt(a);

// Operation by using For loop.
document.write("Operation by using For loop.<br><br>"); // By using document.write();
for (i = a; i >= 1; i--) {
    document.write(i + "<br>");
}

console.log("Operation by using For loop.\n\n"); // By using console.log();
for (i = a; i >= 1; i--) {
    console.log(i + "\n");
}