// WAP to give the Grade according to percentage.

// Declaration of variable.
let percentage;

// User-Input.
percentage = prompt("Enter the Percentage(%):");

// Converting into number.
percentage = parseInt(percentage);

// Operation.
if ((percentage >= 91) && (percentage <= 100)) {
    console.log(`You got A+ Grade for ${percentage}%`);
}
else if ((percentage >= 80) && (percentage <= 90)) {
    console.log(`You got A Grade for ${percentage}%`);
}
else if ((percentage >= 89) && (percentage <= 80)) {
    console.log(`You got B+ Grade for ${percentage}%`);
}
else if ((percentage >= 60) && (percentage <= 70)) {
    console.log(`You got B Grade for ${percentage}%`);
}
else if ((percentage >= 45) && (percentage <= 59)) {
    console.log(`You got C Grade for ${percentage}%`);
}
else if ((percentage >= 33) && (percentage <= 44)) {
    console.log(`You got D Grade for ${percentage}%`);
}
else {
    console.log(`You got E Grade for ${percentage}%`);
}