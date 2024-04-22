// const fom = document.querySelector('form');

// fom.addEventListener('submit', function (e) {
//     console.log(e);
//     e.preventDefault();
    
//     const height = parseInt(document.querySelector('#height').value);
//    const width = parseInt(document.querySelector('#width').value);
//     const result = document.querySelector('.result')
 
//     if(height === " " || height < 0 || isNaN(height)){
//     result.innerHTML = `calculation is ${height}`;
//    }else if(width === " " || width < 0 || isNaN(width)){
//     result.innerHTML = `calculation is ${width}`;
//   } else{
//     const cal = (width / ((height * height) / 10000)).toFixed(2);
//         result.innerHTML = `<span>${cal}</span>`;
//       //  const result1 = document.getElementById('#tex');
//       //  console.log(result1);
//       //  result1.value = `calculation is <span>${cal}</span>`;
//     }

// });

const fom = document.querySelector('form');

fom.addEventListener('submit', function (e) {
    console.log(e);
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const width = parseInt(document.querySelector('#width').value);
    const result = document.querySelector('.result')
 
    if(height === " " || height < 0 || isNaN(height)){
    result.innerHTML = `calculation is ${height}`;
   }else if(width === " " || width < 0 || isNaN(width)){
    result.innerHTML = `calculation is ${width}`;
   } else{
    let cal = (width / ((height * height) / 10000)).toFixed(2);
      result.value = `calculation is ${cal}`;

  }
    
});




