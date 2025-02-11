// WAP to swap number without using 3rd variable and also with [+, -].

// Declaration of Variable.
let a, b;

// User Defined.
a = prompt("Enter the value of a : ");
b = prompt("Enter the value of b : ");

// Before Swapping.
document.write("WAP to swap number without using 3rd variable.<br><br>");
document.write(`Before Swapping: a = ${a}  &  b = ${b}<br>`);

// Operation.
a = parseInt(a);
b = parseInt(b);
a = a * b;
b = a / b;
a = a / b;

// Output.
document.write(`After Swapping: a = ${a}  &  b = ${b}`);