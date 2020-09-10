// hamburger menu ==================================
// Selectors to target elements
const burger = document.getElementById("burger");
const closeBtn = document.getElementById("closeBtn");
const menu = document.getElementById("menu");

// Even Listeners for click event to toggle menu
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
closeBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// date==========================================
// sets date of the year automatically
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// carousel
// Selectors for images
const imgs = document.getElementById("imgs");
console.log(imgs);
const img = document.querySelectorAll("#imgs img");
// start index of carousel at 0
let index = 0;

function runSlide() {
  // increment through each image
  index++;

  // if the index is greater than the length of all images when you get to the end of the list, then set the index back to 0. Go back to the beginning of the list
  if (index > img.length - 1) {
    index = 0;
  }

  imgs.style.transform = `translateX(${-index * 350}px)`;
}

// setInterval(runSlide, 1000);
