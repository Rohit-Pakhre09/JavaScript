// WAP to check the age for the eligibility for the voting .

// Declaration of variable.
let age;

// User-Defined.
age = prompt("Enter your age :");

// Converting into number.
age = parseInt(age);

// Operation
if (age >= 18) {
    console.log("Eligible for Voting.");
}
else if (age == 0 || age < 0) {

    if (age < 0) {
        console.log("Negative number is not allowed.");
    }
    else {
        console.log("Invalid age! Please check once the age.");
    }

}
else {
    console.log("Not Eligible for Voting.");
}
