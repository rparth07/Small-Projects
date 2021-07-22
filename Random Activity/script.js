const activity = document.getElementById("activity");

const actiBtn = document.getElementById("actiBtn");

actiBtn.addEventListener("click", generateActivity);

generateActivity();

async function generateActivity() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://www.boredapi.com/api/activity", config);

  const data = await res.json();

  activity.innerHTML =
    "Activity:<small><i>" +
    data.activity +
    "</small></i><br>Type : <small><i>" +
    data.type +
    "</i></small>";
}
