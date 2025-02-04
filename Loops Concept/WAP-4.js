// WAP to check the Fibonacci sequence by user-input in Javascript.

// Declaration of variable.
let n = prompt("Enter any number: "), i;

// Converting into number.
n = parseInt(n);

// Operation by using For loop.
document.write("Operation of Fibonacci Series by using For loop.<br><br>"); // By using document.write();

let first_no = 0, second_no = 1, result = first_no + second_no;
document.write(`${first_no}, ${second_no}, `);
for (i = 3; i <= n; i++) {
    document.write(`${result}, `);
    first_no = second_no;
    second_no = result;
    result = first_no + second_no;
}