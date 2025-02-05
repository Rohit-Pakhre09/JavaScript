// Number Series: 36, 34, 30, 28, 24, ...

// Variable Declaration.
let a = 36,
    b = a - 2; // First (-2).

document.write("Number Series:<br>");
document.write(`${a}, ${b}, `);

// Operation by For loop.
for (i = 3; i <= 5; i++) {

    // In a variable there is (-2) and In b variable there is (-4) difference. So, solution is down there total difference (-6).
    document.write(`${a -= 6}, ${b -= 6}, `);

}