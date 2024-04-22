const box = document.querySelector(".box");
console.log(box);

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  box.innerHTML = date.toLocaleTimeString();
}, 1000);
