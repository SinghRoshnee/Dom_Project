const butt = document.querySelectorAll(".button");
// console.log(butt);
const body = document.querySelector("body");

butt.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = "orange";
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "green") {
      body.style.backgroundColor = "grey";
    }

    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

//can be also dane in switch case

// switch (e.target.id) {
//     case 'green':
//     body.style.backgroundColor = "grey"
//     break;

//     case 'red':
//     body.style.backgroundColor = e.target.id
//     break;

//     default:
//         console.log("nothing");
//         break;
// }
