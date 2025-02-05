// Number Series: 7, 10, 8, 11, 9, 12, ...

// Declaration of variable.
let a = 7, b = 10, i;

document.write("Number Series:<br>");
// For loop operation.
for (i = 1; i <= 10; i++) {
    document.write(` ${a}, ${b} `);
    a += 1;
    b += 1;
}