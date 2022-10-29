let image_slider=document.getElementsByClassName('image_slider'); //we get a list containing all the images
let caption = document.getElementsByClassName('caption');


let step = 0; //0 = 1st image; 1 = 2nd image ....

let nb_image=image_slider.length; //get the number of images

let previous = document.querySelector('.previous'); 
let next = document.querySelector('.next');

function removeActive(){// we remove the image we don't want to print
    for(let i = 0; i < nb_image;i++){
        image_slider[i].classList.remove('active');
        caption[i].classList.remove('active2');
    }
}

next.addEventListener('click',function(){// we create an event to switch between all the images
    step++;
    if(step>=nb_image){
        step=0;
    }
    removeActive();
    image_slider[step].classList.add('active');
    caption[step].classList.add('active2');
})


previous.addEventListener('click',function(){// we create an event to switch between all the images
    step--;
    if(step<0){
        step=nb_image-1;
    }
    removeActive();
    image_slider[step].classList.add('active');
    caption[step].classList.add('active2');
})


setInterval(function(){
    step++;
    if(step>=nb_image){
        step=0;
    }
    removeActive();
    image_slider[step].classList.add('active');
    caption[step].classList.add('active2');
},5000)
