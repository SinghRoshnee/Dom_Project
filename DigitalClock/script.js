let day = new Date()
console.log(day.toLocaleString());
const h1 = document.querySelector('h1')
console.log(h1);
h1.innerHTML = ` ${day.toDateString()} `
const box = document.querySelector(".box");
console.log(box);

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  box.innerHTML = date.toLocaleTimeString();
}, 1000);
