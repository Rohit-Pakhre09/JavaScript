// Number Series : 2, 1, (1/2), (1/4), ...

// Declaration of variable.
let a = 2, b = 1, i = 2;
document.write(`Number Series: ${a}, ${b} `);

document.write("Number Series:<br>");
// Operation.
while (i <= 20) {
    document.write(", (1/" + i + ")");
    i *= 2;
}