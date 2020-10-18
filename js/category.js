let articles = document.querySelectorAll('.posts-category');
let filter = document.querySelector('.topic');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  }
};
