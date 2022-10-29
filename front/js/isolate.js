let size_1= document.getElementById("amount_item_1");
let base_price_1= document.getElementById("box_price_1");
let size_2= document.getElementById("amount_item_2");
let base_price_2= document.getElementById("box_price_2");
let size_3= document.getElementById("amount_item_3");
let base_price_3= document.getElementById("box_price_3");
let size_4= document.getElementById("amount_item_4");
let base_price_4= document.getElementById("box_price_4");
let size_5= document.getElementById("amount_item_5");
let base_price_5= document.getElementById("box_price_5");




localStorage.setItem('base_price_1',base_price_1.attributes[2].value);
localStorage.setItem('size', size_1.value);
localStorage.setItem('base_price_2',base_price_2.attributes[2].value);
localStorage.setItem('size', size_2.value);
localStorage.setItem('base_price_3',base_price_3.attributes[2].value);
localStorage.setItem('size', size_3.value);
localStorage.setItem('base_price_4',base_price_4.attributes[2].value);
localStorage.setItem('size', size_4.value);
localStorage.setItem('base_price_5',base_price_5.attributes[2].value);
localStorage.setItem('size', size_5.value);

 document.getElementsByTagName("h4")[0].innerText =
            localStorage.getItem("base_price_1") +".00$";
 document.getElementsByTagName("h4")[1].innerText =
            localStorage.getItem("base_price_2") +".00$";
 document.getElementsByTagName("h4")[2].innerText =
            localStorage.getItem("base_price_3") +".00$";
document.getElementsByTagName("h4")[3].innerText =
            localStorage.getItem("base_price_4") +".00$";
document.getElementsByTagName("h4")[4].innerText =
            localStorage.getItem("base_price_5") +".00$";

let preveiwContainer = document.querySelector('.box_preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');



document.querySelectorAll('.container .box').forEach(box =>{
  box.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = box.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

  previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
  });



// change the price //


// function change_price_1(){

//   localStorage.setItem('size', size_1.value);
  
//      if(localStorage.getItem('size')=="1.5 kg"){
//      localStorage.setItem('price',base_price_1.attributes[2].value);
//     document.getElementsByTagName("h4")[0].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
//   if(localStorage.getItem('size')=="2 kg"){
//      localStorage.setItem('price',base_price_1.attributes[2].value*2);
//     document.getElementsByTagName("h4")[0].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
 
//   if(localStorage.getItem('size')=="2.5 kg"){
//      localStorage.setItem('price',base_price_1.attributes[2].value*3);
//     document.getElementsByTagName("h4")[0].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
  
// }
// function change_price_2(){

//   localStorage.setItem('size', size_2.value);
  
//      if(localStorage.getItem('size')=="1.5 kg"){
//      localStorage.setItem('price',base_price_2.attributes[2].value);
//     document.getElementsByTagName("h4")[1].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
//   if(localStorage.getItem('size')=="2 kg"){
//      localStorage.setItem('price',base_price_2.attributes[2].value*2);
//     document.getElementsByTagName("h4")[1].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
 
//   if(localStorage.getItem('size')=="2.5 kg"){
//      localStorage.setItem('price',base_price_2.attributes[2].value*3);
//     document.getElementsByTagName("h4")[1].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
  
// }
// function change_price_3(){

//   localStorage.setItem('size', size_3.value);
  
//      if(localStorage.getItem('size')=="1.5 kg"){
//      localStorage.setItem('price',base_price_3.attributes[2].value);
//     document.getElementsByTagName("h4")[2].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
//   if(localStorage.getItem('size')=="2 kg"){
//      localStorage.setItem('price',base_price_3.attributes[2].value*2);
//     document.getElementsByTagName("h4")[2].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
 
//   if(localStorage.getItem('size')=="2.5 kg"){
//      localStorage.setItem('price',base_price_3.attributes[2].value*3);
//     document.getElementsByTagName("h4")[2].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
  
// }
// function change_price_4(){

//   localStorage.setItem('size', size_4.value);
  
//      if(localStorage.getItem('size')=="1.5 kg"){
//      localStorage.setItem('price',base_price_4.attributes[2].value);
//     document.getElementsByTagName("h4")[3].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
//   if(localStorage.getItem('size')=="2 kg"){
//      localStorage.setItem('price',base_price_4.attributes[2].value*2);
//     document.getElementsByTagName("h4")[3].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
 
//   if(localStorage.getItem('size')=="2.5 kg"){
//      localStorage.setItem('price',base_price_4.attributes[2].value*3);
//     document.getElementsByTagName("h4")[3].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
  
// }
// function change_price_5(){

//   localStorage.setItem('size', size_5.value);
  
//      if(localStorage.getItem('size')=="1.5 kg"){
//      localStorage.setItem('price',base_price_5.attributes[2].value);
//     document.getElementsByTagName("h4")[4].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
//   if(localStorage.getItem('size')=="2 kg"){
//      localStorage.setItem('price',base_price_5.attributes[2].value*2);
//     document.getElementsByTagName("h4")[4].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
 
//   if(localStorage.getItem('size')=="2.5 kg"){
//      localStorage.setItem('price',base_price_5.attributes[2].value*3);
//     document.getElementsByTagName("h4")[4].innerText =
//             localStorage.getItem("price") +".00$";
//         //console.log(localStorage.getItem("price"));
     
//   }
  
// }


// function test() {
//     if (localStorage.getItem('price') == 40) {
//         console.log("hello world")
//     }
// }