// Number Series: 201, 202, 204, 207, ...

// Variable Declaration.
let a = 201;

document.write("Number Series:<br>");
document.write(`${a}, `);

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, increment is one by one.
    document.write(`${a += i}, `);

}