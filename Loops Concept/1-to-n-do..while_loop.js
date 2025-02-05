// WAP to print 1 to n number by using do..while loop in Javascript.

// Declaration of variable.
let a, i;

// User-Input.
a = prompt("Enter any number: ");

// Converting of number.
a = parseInt(a);

// Operation by using do..while loop.
document.write("Operation by using do..while loop.<br><br>"); // By using document.write();
i = 1;
do {
    document.write(i + "<br>");
    i++;
} while (i <= a);

console.log("Operation by using do..while loop.\n\n"); // By using console.log();
i = 1;
do {
    console.log(i + "\n");
    i++;
} while (i <= a);