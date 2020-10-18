let writeMeForm = document.querySelector('.write-me-form');
let commentField = document.querySelector('.comment-field');
let input = document.querySelector('.submit-button');
let charCounter = document.querySelector('.char-counter');
let textCounter = document.querySelector('.text-counter');


textCounter.hidden = true;
input.disabled = true;

commentField.oninput = function () {

  charCounter.textContent = commentField.value.length

    if ( commentField.value.length < 10 || commentField.value.length > 199 ) {
        writeMeForm.classList.add('warning');
        input.disabled = true;
        textCounter.hidden = false;
      } else {
        writeMeForm.classList.remove('warning');
        input.disabled = false;
        textCounter.hidden = true;
      }

};
