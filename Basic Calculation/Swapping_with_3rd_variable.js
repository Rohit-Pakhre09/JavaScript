// WAP to swap number with using 3rd variable.

// Declaration of Variable.
let a, b, c;

// User Defined.
a = prompt("Enter the value of a : ");
b = prompt("Enter the value of b : ");

// Before Swapping.
document.write("WAP to swap number with using 3rd variable. <br><br>");
document.write(`Before Swapping: a = ${a}  &  b = ${b}<br>`);

// Operation.
a = parseInt(a);
b = parseInt(b);
c = a;
a = b;
b = c;

// Output.
document.write(`After Swapping: a = ${a}  &  b = ${b}`);