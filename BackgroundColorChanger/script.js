const body = document.querySelector("body");
const row = document.querySelectorAll(".row");
const container = document.querySelector(".container");
console.log(row);

row.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "color1":
        body.style.background = " #51e2f5";
        container.classList.add("blur");
        break;
      case "color2":
        body.style.background = "#9df9ef";
        container.classList.add("blur");
        break;
      case "color3":
        body.style.background = "#edf7f6";
        container.classList.add("blur");
        break;
      case "color4":
        body.style.background = " #ffa8b6";
        container.classList.add("blur");
        break;
      case "color5":
        body.style.background = " #a28089";
        container.classList.add("blur");
        break;
      default:
        body.innerHTML = "nothing";
        break;
    }
  });
});
