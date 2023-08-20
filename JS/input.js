var HEADER__CLOSE_SEARCH_BUTTON_SELECTOR = '.header__search-close-icon';
var HEADER__SEARCH_SELECTOR = '.header__search-container';
var HEADER__SEARCH_INPUT_SELECTOR = '.header__search';
var HEADER__SEARCH_INPUT = document.querySelector(HEADER__SEARCH_INPUT_SELECTOR);
var HEADER__CLOSE_SEARCH_BUTTON = document.querySelector(HEADER__CLOSE_SEARCH_BUTTON_SELECTOR);
var HEADER__SEARCH = document.querySelector(HEADER__SEARCH_SELECTOR);
var JS_ACTIVE_CLASS = 'js-added-active';
function blurInput(input) {
    input.blur();
}
function placeholderName(element) {
    element.classList.toggle(JS_ACTIVE_CLASS);
}
HEADER__CLOSE_SEARCH_BUTTON.addEventListener('click', function () { return blurInput(HEADER__SEARCH_INPUT); });
HEADER__SEARCH_INPUT.addEventListener("focusout", function () { return placeholderName(HEADER__SEARCH); });
HEADER__SEARCH_INPUT.addEventListener("focus", function () { return placeholderName(HEADER__SEARCH); });
console.log(HEADER__CLOSE_SEARCH_BUTTON);
