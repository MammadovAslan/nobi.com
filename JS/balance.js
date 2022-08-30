const form = document.querySelector(".add-account-form");
const btnConnect = document.querySelector(".btn-connect-bank-account");
const seccess = document.querySelector("#request-success");

btnConnect.addEventListener("click", () => {
  if (getComputedStyle(form).display === "block") {
    form.style.display = "none";
    btnConnect.style.display = "none";
    seccess.style.display = "flex";
  }
});
