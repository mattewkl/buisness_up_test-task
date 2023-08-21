const HEADER__CLOSE_SEARCH_BUTTON_SELECTOR:string = '.header__search-close-icon'
const HEADER__SEARCH_SELECTOR:string = '.header__search-container'
const HEADER__SEARCH_INPUT_SELECTOR:string = '.header__search'
const HEADER__SEARCH_INPUT:HTMLElement = document.querySelector(HEADER__SEARCH_INPUT_SELECTOR)
const HEADER__CLOSE_SEARCH_BUTTON:HTMLElement = document.querySelector(HEADER__CLOSE_SEARCH_BUTTON_SELECTOR)
const HEADER__SEARCH:HTMLElement = document.querySelector(HEADER__SEARCH_SELECTOR)
const JS_ACTIVE_CLASS:string = 'js-added-active'

function blurInput(input:HTMLElement):void {
    input.blur()
}

function placeholderName(element:HTMLElement):void {
    element.classList.toggle(JS_ACTIVE_CLASS)
}

HEADER__CLOSE_SEARCH_BUTTON.addEventListener('click',() => blurInput(HEADER__SEARCH_INPUT))

HEADER__SEARCH_INPUT.addEventListener("focusout", () => placeholderName(HEADER__SEARCH))
HEADER__SEARCH_INPUT.addEventListener("focus", () => placeholderName(HEADER__SEARCH))

const BOTTOMNAV_MENU_BUTTON_SELECTOR:string = '.bottom-nav__button_menu'
const BOTTOMNAV_MENU_BUTTON:HTMLElement = document.querySelector(BOTTOMNAV_MENU_BUTTON_SELECTOR)

const BOTTOM_MENU_SELECTOR:string = '.bottom-nav__menu'
const BOTTOM_MENU_OPENED_CLASS:string = 'bottom-nav__menu_opened'
const BOTTOM_MENU:HTMLElement = document.querySelector(BOTTOM_MENU_SELECTOR)

function toggleBottomMenu():void {
    BOTTOM_MENU.classList.toggle(BOTTOM_MENU_OPENED_CLASS)
}

BOTTOMNAV_MENU_BUTTON.addEventListener('click', toggleBottomMenu)

console.log(BOTTOMNAV_MENU_BUTTON)
