const elem = document.querySelectorAll(".rect")
// console.log(elem);

elem.forEach(function(e){
    // // console.log(e);
    // console.log(e.childNodes);
    // console.log(e.childNodes[2]);
    
    e.addEventListener("mousemove", function(){
        e.childNodes[3].style.opacity = 1
    })

    e.addEventListener("mouseleave", function(){
        e.childNodes[3].style.opacity = 0
    })

    e.addEventListener("mousemove", function(dets){
        e.childNodes[3].style.left = dets.x + "px"
        e.childNodes[3].style.top = dets.y + "px"
    });

   
})