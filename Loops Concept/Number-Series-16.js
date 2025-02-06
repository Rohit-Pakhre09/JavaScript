// Number Series :  80, 10, 70, 15, 60, ...

// Declaration of variable.
let a = 80, b = 10;

document.write("Number Series:<br>");
document.write(`${a}, ${b}, `);

// Operation by For loop.
for (let i = 1; i <= 10; i++) {

    // Here. difference in a is (-10) & b is (+5).
    document.write(`${a -= 10}, ${b += 5}, `);

}