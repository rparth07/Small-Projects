const progress = document.getElementById("progress");
const next = document.getElementById("next");
const back = document.getElementById("back");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

back.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, ind) => {
    if (ind < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive == 1) {
    back.disabled = true;
  } else if (currentActive == circles.length) {
    next.innerHTML = "Submit";
  } else {
    back.disabled = false;
    next.innerHTML = "Next";
  }
}
