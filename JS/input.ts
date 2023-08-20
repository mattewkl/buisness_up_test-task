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

console.log(HEADER__CLOSE_SEARCH_BUTTON)