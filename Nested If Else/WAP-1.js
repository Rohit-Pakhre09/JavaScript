// WAP to check the age by using the nested if else Javascript.

// Declaration of variable.
let age;

// User-Input.
age = prompt("Enter your age: ");

// Converting into number.
age = parseInt(age);

// Operation.
if (age >= 18) {

    // Logic for more than 100 years old.
    if (age > 100) {
        console.log("Enter the valid age!");
    } else {
        console.log("You are Eligible for vote.");
    }

} else {

    // Logic for negative number.
    if (age <= 0) {
        console.log("Your entered negative number. Try again.");
    } else {
        console.log("Your are not Eligible for vote.");
    }

}