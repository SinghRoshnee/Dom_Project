const cont = document.querySelector(".container")
console.log(cont);

const love = document.querySelector(".ri-heart-3-fill")
console.log(love);

cont.addEventListener("dblclick", function(e){
    love.style.transform = "translate(-50%, -50%) scale(1)"

    setTimeout( function(){
        love.style.opacity = " 0.8"
    }, 1000)

    setTimeout( function(){
    love.style.transform = "translate(-50%, -50%) scale(0)"
 
    },2000)
  
    
})