// Number Series: 53, 53, 40, 40, 27, 27, ... 

// Variable Declaration.
let a = 53,
    b = a;

document.write("Number Series:<br>");
document.write(`${a}, ${b}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // There is difference of (-13).
    document.write(`${a -= 13}, ${b -= 13}, `);

}