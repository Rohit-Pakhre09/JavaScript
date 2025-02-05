// Number Series: 8, 22, 8, 28, 8, ... 

// Variable Declaration.
let a = 8,
    b = 22;

document.write("Number Series:<br>");
document.write(`${a}, ${b}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, Difference is (+6).
    document.write(`${a}, ${b += 6}, `);

}