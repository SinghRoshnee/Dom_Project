const main = document.querySelector(".main");
console.log(main);

const crsr = document.querySelector(".cursor")
console.log(crsr);

main.addEventListener("mousemove", function(dets){
  console.log(dets.x);
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y + "px"
})