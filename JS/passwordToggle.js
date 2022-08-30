const togglePassword = document.querySelector("#togglePassword");
const input = document.querySelector("#floatingPassword");
let password = true;

togglePassword.addEventListener("click", function () {
  // toggle the type attribute

  if (password) {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
  password = !password;
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});
