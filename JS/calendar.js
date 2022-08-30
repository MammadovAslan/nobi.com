const calendarEdit = document.querySelector(".calendar-changes");
const btnSave = document.querySelector(".btn-save");
const btnEdit = document.querySelector(".btn-edit");

btnSave.addEventListener("click", () => {
  if (
    getComputedStyle(calendarEdit).display === "flex" &&
    getComputedStyle(btnSave).display === "block"
  ) {
    calendarEdit.style.display = "none";
    btnSave.style.display = "none";
    btnEdit.style.display = "flex";
  } else {
    calendarEdit.style.display = "flex";
    btnSave.style.display = "block";
  }
});

btnEdit.addEventListener("click", () => {
  console.log("test");
  if (
    getComputedStyle(calendarEdit).display === "none" &&
    getComputedStyle(btnEdit).display === "flex"
  ) {
    calendarEdit.style.display = "flex";
    btnSave.style.display = "block";
    btnEdit.style.display = "none";
  }
});
