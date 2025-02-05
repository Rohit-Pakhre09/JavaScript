// Number Series:  58, 52, 46, 40, 34, ... 

// Variable Declaration.
let a = 58;

document.write("Number Series:<br>");
document.write(`${a}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, Difference of (-6).
    document.write(`${a -= 6}, `);

}