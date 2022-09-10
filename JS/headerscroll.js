const header = document.querySelector("#header-main");
const side = document.querySelector("#sidebar");
const windowSize = document.documentElement.clientWidth;

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset;
  if (scrollTop > lastScrollTop) {
    header.style.top = "-104px";
    side.style.top = "24px";
    if (windowSize <= 988) {
      side.style.top = "0px";
      side.style.transition = "0s";
    }
  } else {
    header.style.top = "0";
    side.style.top = "136px";
    if (windowSize <= 988) {
      side.style.top = "56px";
      side.style.transition = "0.4s";
    }
  }
  lastScrollTop = scrollTop;
});
