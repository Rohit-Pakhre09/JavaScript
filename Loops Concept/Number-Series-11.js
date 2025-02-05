// Number Series: 1.5, 2.3, 3.1, 3.9, ...

// Variable Declaration.
let a = 1.5;

document.write("Number Series:<br>");
document.write(`${a}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, Difference is (+0.8).
    document.write(`${a += 0.8}, `);

}