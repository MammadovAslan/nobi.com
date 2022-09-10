const togglePassword = document.querySelector("#togglePassword");
const inputPassword = document.querySelector("#floatingPassword");
let password = true;

/*-------------Show/hide password---------------------*/

togglePassword.addEventListener("click", function () {
  if (password) {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
  password = !password;
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

/*-------------Random password geenrator---------------------*/

const signupPasswordInput = document.querySelector(".signup-password");
function generatePass() {
  const subs =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890".split("");
  let result = [];

  for (let i = 0; i < 8; i++) {
    let number = Math.floor(Math.random() * (subs.length - 1));

    result.push(subs[number]);
  }

  this.value = result.join("");
}

signupPasswordInput.addEventListener("click", generatePass);
signupPasswordInput.addEventListener("click", () => {
  signupPasswordInput.select();
  document.execCommand("copy");
});
