const form = document.querySelector("form");
// console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  console.log("hi");

  const height = parseInt(document.querySelector("#height").value);
  console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(weight);
  const result = document.querySelector(".result");
  const msg = document.querySelector('.msg')
  const section = document.querySelector('.section')


  if (height == "" || height < 0) {
    console.log("small");
    const ptag = document.createElement("p");
    ptag.innerHTML = `Entered height is invalid  ${height}`;
    result.appendChild(ptag);
  } else if (weight == " " || weight < 0) {
    const ptag = document.createElement("p");
    ptag.innerHTML = `Entered weight is invalid ${weight}`;
    result.appendChild(ptag);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Calculated value is ${bmi}</span>`;
    section.style.display = "block"
    if (bmi < 12) {
      msg.innerHTML = `You are underweight ${bmi}`;
    } else if (bmi > 14) {
      msg.innerHTML = `You are Overweight ${bmi}`;
    } else {
      msg.innerHTML = `You are normal ${bmi}`;
    }
  }
});

// if (bmi < 12) msg1.innerHTML = `You are underweight ${bmi}`;
// else if (bmi <= 14 ) msg2.innerHTML = `You are perfect ${bmi}`;
// else msg3.innerHTML = `You are Overweight ${bmi}`;
