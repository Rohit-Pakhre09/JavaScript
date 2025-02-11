// WAP to hire an employee with following situation :-

// Requirement :-
// Company 1 : Student, Internship, Fresher, experience.
// Company 2 : !Student, Internship, !Fresher, experience.
// Company 3 : Experience>=2.


// WAP of Company 1.
let experience = prompt("How much experience you have? (In numbers) : ");
experience = parseInt(experience);

document.write(`If approved then the result will be 'true' if not then 'false': <br> ${experience>=2}`);