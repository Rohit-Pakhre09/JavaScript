// Number Series :  5.2, 4.8, 4.4, 4, ...

// Declaration of variable.
let a = 5.2;

document.write("Number Series:<br>");
document.write(`${a}, `);

// Operation by For loop.
for (let i = 1; i <= 10; i++) {

    // Here. difference in a is (-0.4).
    document.write(`${a -= 0.4}, `);

}