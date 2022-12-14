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
      localStorage.clear();
    };
  });
