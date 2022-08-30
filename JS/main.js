const btn = document.querySelector(".porfile-button");
const sidebar = document.querySelector("#sidebar");
const shadow = document.querySelector(".shadow__main");
btn.addEventListener("click", () => {
  const w = document.documentElement.clientWidth;
  if (w <= 988) {
    if (getComputedStyle(sidebar).display === "none") {
      sidebar.style.display = "flex";
      shadow.style.display = "block";
    } else {
      sidebar.style.display = "none";
      shadow.style.display = "none";
    }
  }
});
