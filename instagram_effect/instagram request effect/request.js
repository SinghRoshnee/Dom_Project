const love = document.querySelector(".love");
console.log(love);
check = 0

// const friend = document.querySelector(".add")
// friend.addEventListener("click", function(e){
//    console.log(e);
//    love.innerHTML = "love"
// })

// const unfriend = document.querySelector(".removeh")
// unfriend.addEventListener("click", function(e){
//     love.innerHTML = "Hate"
// })


const friend = document.querySelector(".add")
friend.addEventListener("click", function(e){
    if (check == 0) {
        console.log("hi");
        love.innerHTML = "love",
        love.style.color = "red"
        friend.innerHTML = "unfriend"
        check = 1
    }else{
        love.innerHTML = "Hate"
        love.style.color = "green"
        friend.innerHTML = "Addhim"
        check = 0
    }
})
