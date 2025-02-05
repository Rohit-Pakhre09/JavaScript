// Number Series: 31, 29, 24, 22, 17, ...

// Variable Declaration.
let a = 31,
    b = a - 2;

document.write("Number Series:<br>");
document.write(`${a}, ${b}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, Difference is (-7).
    document.write(`${a -= 7}, ${b -= 7}, `);

}