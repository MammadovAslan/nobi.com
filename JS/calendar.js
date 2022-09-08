const calendarEdit = document.querySelector(".calendar-changes");
const btnCalendarSave = document.querySelector(".btn-save");
const btnCalendarEdit = document.querySelector(".btn-edit");

btnCalendarSave.addEventListener("click", () => {
  if (
    getComputedStyle(calendarEdit).display === "flex" &&
    getComputedStyle(btnCalendarSave).display === "block"
  ) {
    calendarEdit.style.display = "none";
    btnCalendarSave.style.display = "none";
    btnCalendarEdit.style.display = "flex";
  } else {
    calendarEdit.style.display = "flex";
    btnCalendarSave.style.display = "block";
  }
});

btnCalendarEdit.addEventListener("click", () => {
  console.log("test");
  if (
    getComputedStyle(calendarEdit).display === "none" &&
    getComputedStyle(btnCalendarEdit).display === "flex"
  ) {
    calendarEdit.style.display = "flex";
    btnCalendarSave.style.display = "block";
    btnCalendarEdit.style.display = "none";
  }
});
