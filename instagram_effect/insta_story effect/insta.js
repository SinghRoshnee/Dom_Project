let arr = [{
    dp : "https://images.unsplash.com/photo-1564574685150-74a84d02d695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    post : "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
    
    {
        dp : "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww",
        post : "https://media.istockphoto.com/id/523478288/photo/handsome-young-man-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=FkyJU0gjDb32voq895wufmqo8C2q8hD3YanntIc3SYM="
    },

    {
        dp : "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
        post : "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        dp : "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",
        post : "https://images.unsplash.com/photo-1516446636564-c48e723868fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        dp : "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
        post : "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        dp : "https://media.istockphoto.com/id/1285362941/photo/beautiful-woman-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=tZHSfUbKmL79yoMUcnj3QciE6sv7r9hEiulmuFFzO6c=",
        post : "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBib3lzfGVufDB8fDB8fHww"
    },
]
// console.log(arr);

clutter = ""
arr.forEach( function(elem,idx){
    // console.log(elem,idx);
   clutter += ` <div class="story">
   <img  src ="${elem.dp} " id ="${id =idx}" alt="">
</div> `
})
// console.log(clutter);
document.querySelector(".card").innerHTML = clutter

document.querySelector(".card").addEventListener("click",function(dets){
    // console.log(dets.target.id);
   document.querySelector(".plain_page").style.display = "block"
   document.querySelector(".plain_page").style.backgroundImage = `url(${arr[dets.target.id].post})`

   setTimeout( function(){
    document.querySelector(".plain_page").style.display = "none"
   },2000)

})


// data = ""
// setInterval( function(){
//     // console.log("hello");
//       data = "hello"
// },2000)

// console.log(data)
// let card = document.querySelector(".card_insider")
// console.log(card);

// data = " "
// card.forEach( function(val){
//     console.log(val);

//     setInterval( function(){
//         data = 
//     }, 2000)
// })

let image = document.querySelector("#im")
var value = " "

let arre = ['https://images.unsplash.com/photo-1704321200989-abe803f52491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1704044843056-f58d8c147f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D']

            // setInterval( function(){
                
            //  let random = Math.floor(Math.random() *3);
            //    console.log(random);
            //     image.src = arre[random];
            //     console.log(image.src);
            //  }, 5000)

            let i = 0;
            image.src = [i]
            setInterval( function(){
                if(i == arre.length - 1) i = 0;
                else i++;
                image.src = arre[i];
            }, 5000)


