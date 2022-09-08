const form = document.querySelector(".add-account-form");
const btnAccountConnect = document.querySelector(".btn-connect-bank-account");
const successMessage = document.querySelector("#request-success");

btnAccountConnect.addEventListener("click", () => {
  if (getComputedStyle(form).display === "block") {
    form.style.display = "none";
    btnAccountConnect.style.display = "none";
    successMessage.style.display = "flex";
  }
});
