const weeksInYear = 52;
const magic = document.getElementById("magic");

magic.addEventListener("click", function (e) {
  e.preventDefault();

  const calendar = document.getElementById("calendar");
  const summary = document.getElementById("summary");
  const ageInput = document.getElementById("age");
  const leInput = document.getElementById("le");
  const age = parseInt(ageInput.value);
  const lifeExpectancy = parseInt(leInput.value);

  calendar.innerHTML = "";

  // empty values
  if (ageInput.value.length === 0 || leInput.value.length === 0) {
    summary.textContent = "Please enter your age and life expectancy.";
    return false;
  }

  // age range validation
  if (age > 120 || age < 0 || lifeExpectancy > 120 || lifeExpectancy < 0) {
    ageInput.value = "";
    leInput.value = "";
    summary.textContent = "";
    return false;
  }

  if (age > lifeExpectancy) {
    summary.textContent = "Congrats on surpassing your life expectancy!";
    return false;
  }

  // convert to weeks
  const ageInWeeks = age * weeksInYear;
  const lifeExpectancyInWeeks = lifeExpectancy * weeksInYear;

  const remainingWeeks = lifeExpectancyInWeeks - ageInWeeks;
  const usedWeeks = lifeExpectancyInWeeks - remainingWeeks;

  summary.textContent =
    "You have spent " +
    usedWeeks +
    " weeks and have " +
    remainingWeeks +
    " weeks left.";

  // render week boxes
  for (let i = 0; i < lifeExpectancyInWeeks; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("weekbox");
    if (i <= ageInWeeks) {
      newDiv.classList.add("weekbox--filled");
    }
    calendar.appendChild(newDiv);
  }
});
