const menu = document.querySelector(".btn-toggle");
menu.addEventListener("click", () => {
  console.log("clcikeed");
  document.querySelector(".nav").classList.toggle("toggle");
});

// Shrink Nav when Scroll
// const nav = document.querySelector("nav");
// window.addEventListener("scroll", () => {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     nav.classList.add("toggle shrink");
//   } else {
//     nav.classList.remove("toggle shrink");
//   }
// });
