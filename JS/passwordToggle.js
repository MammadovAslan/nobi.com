const togglePassword = document.querySelector("#togglePassword");
const inputPassword = document.querySelector("#floatingPassword");
let password = true;

togglePassword.addEventListener("click", function () {
  // toggle the type attribute

  if (password) {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
  password = !password;
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});
