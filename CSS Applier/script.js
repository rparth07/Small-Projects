const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  const container = document.querySelector(".container");

  if (suffix == "") {
    container.style.backgroundColor = this.value;
  } else if (suffix == "px") {
    container.style.filter = `blur(${this.value}` + suffix + `)`;
  } else {
    container.style.width = `${this.value}` + suffix;
    container.style.height = `${this.value}` + suffix;
  }
}

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
});
inputs.forEach((input) => {
  input.addEventListener("mousemove", handleUpdate);
});
