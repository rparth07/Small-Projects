const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    window.location.href =
      "https://www.google.com/search?q=" +
      document.getElementById("input").value +
      "&sourceid=chrome&ie=UTF-8";
  }
});
