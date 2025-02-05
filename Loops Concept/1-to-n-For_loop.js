// WAP to print 1 to n number by using for loop in Javascript.

// Declaration of variable.
let a, i;

// User-Input.
a = prompt("Enter any number: ");

// Converting of number.
a = parseInt(a);

// Operation by using For loop.
document.write("Operation by using For loop.<br><br>"); // By document.write();
for (i = 1; i <= a; i++) {
    document.write(i + "<br>");
}

console.log("Operation by using For loop.\n\n"); // By console.log();
for (i = 1; i <= a; i++) {
    console.log(i + "\n");
}