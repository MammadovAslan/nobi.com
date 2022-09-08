const btn = document.querySelector(".porfile-button");
const sidebar = document.querySelector("#sidebar");

btn.addEventListener("click", () => {
  const w = document.documentElement.clientWidth;
  if (w <= 988) {
    if (getComputedStyle(sidebar).display === "none") {
      sidebar.style.display = "flex";
      shadowSidebar.style.display = "block";
    } else {
      sidebar.style.display = "none";
      shadowSidebar.style.display = "none";
    }
  }
});
/*----------Sidebar shadow effect--------------------*/
const shadowSidebar = document.querySelector(".shadow__main");

shadowSidebar.addEventListener("click", () => {
  shadowSidebar.style.display = "none";
  sidebar.style.display = "none";
});

/*----------Menu toggle--------------------*/
const shadowMenu = document.querySelector(".shadow__background");
const menu = document.querySelector(".menu__box");
const menuToggleBtn = document.querySelector("#menu__toggle");

function toggleMenu() {
  menu.style.left = "-100% !important";
  shadowMenu.style.display = "none !important";
  menuToggleBtn.checked = false;
}

shadowMenu.addEventListener("click", toggleMenu);

/*----------Profile fullname settings--------------------*/
const sidebarName = document.querySelector("#sidebar-name");
const sidebarSurname = document.querySelector("#sidebar-surname");
const name = document.querySelector("#name-input");
const surname = document.querySelector("#surname-input");

name.addEventListener("blur", () => {
  sidebarName.textContent = name.value;
});

surname.addEventListener("blur", () => {
  sidebarSurname.textContent = surname.value;
});
/*----------Certificate settings--------------------*/
const certificateImage = document.getElementsByClassName("certificate-image");
const certificateDescr = document.getElementsByClassName(
  "certificate-desctiption"
);
const certificateDeleted = document.getElementsByClassName("deletion-message");
const deleteCertificateBtn =
  document.getElementsByClassName("delete-certificate");
const certSettings = document.getElementsByClassName("certificate-settings");

for (let i = 0; i < deleteCertificateBtn.length; i++) {
  deleteCertificateBtn[i].addEventListener("click", () => {
    certificateImage[i].style.display = "none";
    certificateDescr[i].style.display = "none";
    certificateDeleted[i].style.display = "block";
  });
  certificateDeleted[i].addEventListener("click", () => {
    certificateImage[i].style.display = "block";
    certificateDescr[i].style.display = "block";
    certificateDeleted[i].style.display = "none";
  });
}
