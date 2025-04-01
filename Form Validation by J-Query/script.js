const btn = $("#btn");
const guide_msg = $("#guide_msg");

$("#btn").on("click", () => {
  let name = $("#name").val().trim();
  let email = $("#email").val().trim();
  let password = $("#password").val().trim();
  let confirmPassword = $("#confirm_password").val().trim();

  let namePattern = /^[a-zA-Z ]{3,}$/;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  let isvalid = true;

  if (name === '' || email === '' || password === '' || confirmPassword === '') {
    guide_msg.text('*Please fill in all the fields!');
    guide_msg.css('color', 'red');
    isvalid = false;
  }

  if (!namePattern.test(name)) {
    guide_msg.text('*Name must contains only alphabets!');
    guide_msg.css('color', 'red');
    isvalid = false;
  }

  if (!emailPattern.test(email)) {
    guide_msg.text('*Please enter a valid email address!');
    guide_msg.css('color', 'red');
    isvalid = false;
  }

  if (!passwordPattern.test(password)) {
    guide_msg.text('*Password must be at least 6 characters, contain 1 digit & 1 special character!');
    guide_msg.css('color', 'red');
    isvalid = false;
  }

  if (confirmPassword !== password) {
    guide_msg.text('*Passwords do not match!');
    guide_msg.css('color', 'red');
    isvalid = false;
  }

  if (isvalid) {
    guide_msg.text('Form Submitted Successfully!!');
    guide_msg.css('color', 'green');
    $(".form-container")[0].reset(); 
  }
});
