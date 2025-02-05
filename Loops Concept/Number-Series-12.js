// Number Series: 14, 28, 20, 40, 32, 64, ...

// Variable Declaration.
let a = 14,
    b = a * 2;
    c = b - 8;

document.write("Number Series:<br>");
document.write(`${a}, ${b}, ${c}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, first multiply by (*2) & Subtraction by (-8).
    document.write(`${c *= 2}, ${c -= 8}, `);

}