// Number Series: 22, 21, 23, 22, 24, 23, ...

// Variable Declaration
let a = 22,
    b = a - 1; // First (+1).

document.write("Number Series:<br>");
document.write(`${a}, ${b}, `);    

// Operation by For loop.
for (let i = 1; i <= 5; i++) {

    // Here, In a & b is increased by (+1). 
    document.write(`${a+=1}, ${b+=1}, `);

}