// script.js
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector(".result");
  const msg = document.querySelector(".msg");
  const section = document.querySelector(".section");

  // Clear previous results
  result.innerHTML = "";
  msg.innerHTML = "";

  if (isNaN(height) || height <= 0) {
    const ptag = document.createElement("p");
    ptag.innerHTML = `Entered height is invalid: ${height}`;
    result.appendChild(ptag);
  } else if (isNaN(weight) || weight <= 0) {
    const ptag = document.createElement("p");
    ptag.innerHTML = `Entered weight is invalid: ${weight}`;
    result.appendChild(ptag);
  } else {
    const bmi = (weight / (height * height)).toFixed(2);
    result.classList.add("active");
    result.innerHTML = `<span>Calculated BMI is ${bmi}</span>`;
    section.style.display = "block";

    if (bmi < 18.5) {
      msg.innerHTML = `You are underweight: ${bmi}`;
    } else if (bmi > 24.9) {
      msg.innerHTML = `You are overweight: ${bmi}`;
    } else {
      msg.innerHTML = `You are perfect in weight: ${bmi}`;
    }
  }
});
