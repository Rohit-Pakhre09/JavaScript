// All the Logical Operators.

// Declaration of variable.
let a, result_1, result_2;

// User-Input.
a = prompt("Enter the number from 1 to 5 :");
b = prompt("Enter the number from 1 to 5 :");

// Convert into numbers.
a = parseInt(a);
b = parseInt(b);

// Operation.
console.log("Number Between 1 to 5\n");
console.log(`Logical Operator(&&) :\n\na = ${a}, b = ${b}\n${a} && ${b} => ${(a>=1 && a<=5) && (b>=1 && b<=5)}`);
console.log(`Logical Operator(||) :\n\na = ${a}, b = ${b}\n${a} || ${b} => ${(a>=1 && a<=5) || (b>=1 && b<=5)}`);

result_1 = (a>=1 && a<=5);
result_2 = (b>=1 && b<=5);
console.log(`Logical Operator(!) :\n\na = ${a}, b = ${b}\n${a} = ${!(result_1)} , ${b} = ${!(result_2)}`);

// Document Part.
document.write("Number Between 1 to 5<br><br><br>");
document.write(`Logical Operator(&&) :<br><br>a = ${a}, b = ${b}<br>${a} && ${b} => ${(a>=1 && a<=5) && (b>=1 && b<=5)}<br><br>`);
document.write(`Logical Operator(||) :<br><br>a = ${a}, b = ${b}<br>${a} || ${b} => ${(a>=1 && a<=5) || (b>=1 && b<=5)}<br><br>`);

result_1 = (a>=1 && a<=5);
result_2 = (b>=1 && b<=5);
document.write(`Logical Operator(!) :<br><br>a = ${a}, b = ${b}<br>${a} = ${!(result_1)} , ${b} = ${!(result_2)}`);