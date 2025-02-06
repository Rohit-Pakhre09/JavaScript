// Number Series :  8, 6, 9, 23, 87 , ...

// Declaration of variable.
let a = 8, b = 2;

document.write("Number Series:<br>");
document.write(`${a}, `);

// Operation by For loop.
for (let i = 1; i <= 10; i++) {

    // Here, a is first multiply by i, then minus by b which is increasing one by one and then so on. 
    let result = (a * i) - b;

    document.write(`${result}, `);
    b++;
    a = result;
}