var searchButton = document.querySelector('.hotel-search-button');
var searchPopup = document.querySelector('.modal-hotel-search');

searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle('modal-show');
});