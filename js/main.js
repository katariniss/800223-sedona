var searchButton = document.querySelector('.hotel-search-button');
var searchPopup = document.querySelector('.modal-hotel-search');

var form = searchPopup.querySelector("form");

var arrivalDate = searchPopup.querySelector("[name=arrival-date]");
var departureDate = searchPopup.querySelector("[name=departure-date]");
var adultsNumber = searchPopup.querySelector("[name=adults-number]");
var childrenNumber = searchPopup.querySelector("[name=children-number]");

var isStorageSupported = true;
var adultsFromStorage = "";
var childrenFromStorage = "";

try {
    adultsFromStorage = localStorage.getItem("adultsNumber");
    childrenFromStorage = localStorage.getItem("childrenNumber");
} catch (err) {
    isStorageSupported = false;
}

searchButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    searchPopup.classList.toggle('modal-show');

    if (adultsFromStorage) {
        adultsNumber.value = adultsFromStorage;
    }
    if (childrenFromStorage) {
        childrenNumber.value = childrenFromStorage;
    }
});

form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || !adultsNumber.value) {
        evt.preventDefault();

        searchPopup.classList.remove("modal-error");
        searchPopup.offsetWidth = searchPopup.offsetWidth;
        searchPopup.classList.add("modal-error");
    } else {
        if (isStorageSupported) {
            localStorage.setItem("adultsNumber", adultsNumber.value);
            localStorage.setItem("childrenNumber", childrenNumber.value);
        }
    }
});