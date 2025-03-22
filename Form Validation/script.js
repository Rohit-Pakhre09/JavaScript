const btn = document.getElementById('btn');
const guide_msg = document.getElementById('guide_msg');

btn.addEventListener('click', () => {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirm_password = document.getElementById('confirm_password').value.trim();
    const namePattern = /^[A-Za-z\s]+$/;

    if (name === '' || email === '' || password === '' || confirm_password === '') {
        guide_msg.innerHTML = "*All fields must be filled.";
        guide_msg.style.color = 'red';
    } else if (!namePattern.test(name)) {
        guide_msg.innerHTML = '* Name field must contain only alphabets!';
        guide_msg.style.color = 'red';
    } else if (!email.includes('@')) {
        guide_msg.innerHTML = '*Add @ in the Email field.';
        guide_msg.style.color = 'red';
    } else if (password !== confirm_password) {
        guide_msg.innerHTML = '* Confirm Password must match Password.';
        guide_msg.style.color = 'red';
    } else {
        guide_msg.innerHTML = "Form submitted successfully!";
        guide_msg.style.color = "green";
    }
});