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
var BOTTOMNAV_MENU_BUTTON_SELECTOR = '.bottom-nav__button_menu';
var BOTTOMNAV_MENU_BUTTON = document.querySelector(BOTTOMNAV_MENU_BUTTON_SELECTOR);
var BOTTOM_MENU_SELECTOR = '.bottom-nav__menu';
var BOTTOM_MENU_OPENED_CLASS = 'bottom-nav__menu_opened';
var BOTTOM_MENU = document.querySelector(BOTTOM_MENU_SELECTOR);
function toggleBottomMenu() {
    BOTTOM_MENU.classList.toggle(BOTTOM_MENU_OPENED_CLASS);
}
BOTTOMNAV_MENU_BUTTON.addEventListener('click', toggleBottomMenu);
console.log(BOTTOMNAV_MENU_BUTTON);
