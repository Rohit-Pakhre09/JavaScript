// Number Series :  2, 6, 18, 54, ...

// Declaration of variable.
let a = 2;

document.write("Number Series:<br>");
document.write(`${a}, `);

// Operation by For loop.
for (let i = 1; i <= 10; i++) {

    // Here. difference in a is (*3).
    document.write(`${a *= 3}, `);

}