var searchButton = document.querySelector(".hotel-search-button");
var searchPopup = document.querySelector(".modal-hotel-search");

var form = searchPopup.querySelector("form");

var arrivalDate = searchPopup.querySelector("[name=arrival-date]");
var departureDate = searchPopup.querySelector("[name=departure-date]");
var adultsNumberInput = searchPopup.querySelector("[name=adults-number]");
var childrenNumberInput = searchPopup.querySelector("[name=children-number]");

var isStorageSupported = true;
var adultsFromStorage = "";
var childrenFromStorage = "";

try {
    adultsFromStorage = localStorage.getItem("adultsNumberInput");
    childrenFromStorage = localStorage.getItem("childrenNumberInput");
} catch (err) {
    isStorageSupported = false;
}

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.remove("modal-error");
    searchPopup.classList.toggle("modal-show");

    if (adultsFromStorage) {
        adultsNumberInput.value = adultsFromStorage;
    }
    if (childrenFromStorage) {
        childrenNumberInput.value = childrenFromStorage;
    }
});

form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || !adultsNumberInput.value) {
        evt.preventDefault();

        searchPopup.classList.remove("modal-error");
        searchPopup.offsetWidth = searchPopup.offsetWidth;
        searchPopup.classList.add("modal-error");
    } else {
        if (isStorageSupported) {
            localStorage.setItem("adultsNumberInput", adultsNumberInput.value);
            localStorage.setItem("childrenNumberInput", childrenNumberInput.value);
        }
    }
});

var adultsIncrementButton = document.querySelector(".adults-plus-button");
var adultsDecrementButton = document.querySelector(".adults-minus-button");

var childrenIncrementButton = document.querySelector(".children-plus-button");
var childrenDecrementButton = document.querySelector(".children-minus-button");

adultsIncrementButton.addEventListener("click", function (evt) {
    incrementInputValue(adultsNumberInput);
});

adultsDecrementButton.addEventListener("click", function (evt) {
    decrementInputValue(adultsNumberInput);
});


childrenIncrementButton.addEventListener("click", function (evt) {
    incrementInputValue(childrenNumberInput);
});

childrenDecrementButton.addEventListener("click", function (evt) {
    decrementInputValue(childrenNumberInput);
});


function incrementInputValue(inputElement){
    inputElement.value = Number(inputElement.value) + 1;
}

function decrementInputValue(inputElement){
    var valueAsNumber = Number(inputElement.value);

    if (valueAsNumber === 0) {
        return;
    }

    inputElement.value = valueAsNumber - 1;
}
