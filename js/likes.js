let likes = document.querySelector('.likes');
let likesNumber = document.querySelector('.likes-number')

likes.onclick = function () {
    if (likes.classList.contains('added')) {
        likesNumber.textContent--;
        likesNumber.style.fontWeight= 'normal';
        likesNumber.style.color= 'black';
      } else {likesNumber.textContent++;
        likesNumber.style.fontWeight= 'bold';
        likesNumber.style.color= 'rgb(133, 133, 242)';};
   

  likes.classList.toggle('added');
};
