const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <p class="big">
    ${e.which}
  </p> 
  <div class="key">
    ${e.key === " " ? "Space character" : e.key}
    <small>event.key</small>
  </div>
  <div class="key">${e.keyCode}<small>event.keyCode</small></div>
  <div class="key">${e.location}<small>event.location</small></div>
  <div class="key">${e.code}<small>event.code</small></div>
`;
});
