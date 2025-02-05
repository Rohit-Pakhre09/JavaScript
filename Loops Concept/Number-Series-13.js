// Number Series: 2, 4, 6, 8, 10, ...

// Variable Declaration.
let a = 2;

document.write("Number Series:<br>");
document.write(`${a}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, first added by (+2).
    document.write(`${a += 2}, `);

}