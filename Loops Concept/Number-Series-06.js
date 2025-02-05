// Number Series: 21, 9, 21, 11, 21, 13, 21, ...

// Variable Declaration.
let a = 21,
    b = 9;

document.write("Number Series:<br>");
document.write(`${a}, ${b}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, Difference of (+2)
    document.write(`${a}, ${b += 2}, `);

}