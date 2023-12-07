const button = document.getElementById('button');
const mainContainer = document.getElementById('container');
const thankYouCard = document.getElementById('container2');
const rating = document.getElementById('rating');
const ratingScore = document.querySelectorAll('.rating-score');

// Initially disable the button until ratingScore clicked
button.disabled = true;

// Hide the main container and show Thank You Card with the rating
button.addEventListener('click', () => {
  thankYouCard.classList.remove('hidden');
  mainContainer.style.display = 'none';
});

// Show rating out of 5
ratingScore.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;

    // Enable the button again
    button.disabled = false;
  });
});
