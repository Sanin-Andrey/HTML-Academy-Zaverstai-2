let commentForm = document.querySelector('.comment-form');
let commentZone = document.querySelector('.comment-zone');
let commentArea = document.querySelector('.comment-area');
let commentName = document.querySelector('.comment-name-input');
let commentProf = document.querySelector('.comment-prof');
let commentMail = document.querySelector('.comment-mail-input');
let commentButton = document.querySelector('.comment-button');
let charCounter = document.querySelector('.char-counter-comment');
let textCounter = document.querySelector('.text-counter-comment');

textCounter.hidden = true;
commentButton.disabled = true;

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newProf = document.createElement('div');
  newProf.classList.add('comment-prof');

 let newProfImg = document.createElement('img');
 newProfImg.classList.add('comment-img');
 newProfImg.src= 'img/commentsnew.png';
  

 let  newProfName = document.createElement('p');
 newProfName.classList.add('comment-name');
 newProfName.textContent = commentName.value;
  commentName.value = '';
  
 let  newComment = document.createElement('p');
  newComment.classList.add('comment-text');
  newComment.textContent = commentArea.value;
  commentArea.value = '';
  
  commentMail.value = '';
  



  commentZone.append(newProf);
  commentZone.append(newProfImg);
  commentZone.append(newProfName);
  commentZone.append(newComment);

  commentZone.scrollTo(0, 99999);

};

commentArea.oninput = function () {

  charCounter.textContent = commentArea.value.length

  if ( commentArea.value.length < 10 || commentArea.value.length > 199 ) {
    commentForm.classList.add('warning');
    commentButton.disabled = true;
    textCounter.hidden = false;
    } else {
      commentForm.classList.remove('warning');
      commentButton.disabled = false;
      textCounter.hidden = true;
    }

};

