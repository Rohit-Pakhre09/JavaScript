// Number Series:  3, 4, 7, 8, 11, 12, ...

// Variable Declaration.
let a = 3,
    b = a + 1;

document.write("Number Series:<br>");
document.write(`${a}, ${b}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, Difference is (+4).
    document.write(`${a += 4}, ${b += 4}, `);

}