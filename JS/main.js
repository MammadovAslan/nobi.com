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
  if (name.value.length > 0) {
    sidebarName.textContent = name.value;
  } else {
    sidebarName.textContent = "Ulvin";
  }
});

surname.addEventListener("blur", () => {
  if (surname.value.length > 0) {
    sidebarSurname.textContent = surname.value;
  } else {
    sidebarSurname.textContent = "Omarov";
  }
});

/*----------Certificate inputs--------------------*/
const certificateName = document.querySelector("#certificate-input-name");
const certificateLink = document.querySelector("#certificate-input-link");

function clearInput() {
  this.value = "";
}

certificateName.addEventListener("focus", clearInput);
certificateName.addEventListener("blur", () => {
  certificateName.value = "Certificate name";
});

certificateLink.addEventListener("focus", clearInput);
certificateLink.addEventListener("blur", () => {
  certificateLink.value = "Certificate link (optional)";
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

/*----------Settings > Change profile photo--------------------*/
const changePhotoBtn = document.querySelector("#changephoto");
const photo = document.querySelector("#settingspicture");
const deletePhoto = document.querySelector("#delete-photo");

deletePhoto.addEventListener("click", () => {
  photo.src = "images/Ellipse 93.svg";
  changePhotoBtn.value = "";
});

changephoto.onchange = () => {
  const [file] = changephoto.files;
  if (file) {
    settingspicture.src = URL.createObjectURL(file);
  }
};
