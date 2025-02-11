// WAP to take two variable and perform their Mathematical Operation with user input.

// Declaration of Variable.
let a, b;

// User Input .
a = prompt("Enter the value of a : ");
b = prompt("Enter the value of b : ");

// Converting String into Number.
a = parseInt(a);
b = parseInt(b);

// Title.
document.write("WAP to take two variable and perform their Mathematical Operation with user input.<br>");
document.write("Arithmetic Operator<br><br>");

// Operation.
document.write(`Addition of a & b : <br> ${a} + ${b} =   ${a + b}<br><br>`);
document.write(`Subtraction of a & b : <br> ${a} - ${b} =   ${a - b}<br><br>`);
document.write(`Multiplication of a & b : <br> ${a} * ${b} =   ${a * b}<br><br>`);
document.write(`Division of a & b : <br> ${a} / ${b} =   ${a / b}<br><br>`);
document.write(`Module of a & b : <br> ${a} % ${b} =   ${a % b}<br><br>`);
document.write(`Exponential of a & b : <br> ${a} ^ ${b} =   ${a ** b}<br><br>`);