//selectors

const CART_ITEM_AMOUNT_SELECTOR:string = '.header__cart-item-amount'
const CART_ITEM_PRICE_SELECTOR:string = '.header__cart-item-price'
const NO_ITEMS_SELECTOR:string = '.header__cart-item_no-items'
const ADD_DOOR1_BTN_SELECTOR:string = '.add-door_1'
const ADD_DOOR2_BTN_SELECTOR:string = '.add-door_2'
const ADD_DOOR3_BTN_SELECTOR:string = '.add-door_3'
const ADD_DOOR4_BTN_SELECTOR:string = '.add-door_4'
const CHECKBOX_SELECTOR:string = 'popup-acceptance-one'
const CHECKBOX_CONTAINER_SELECTOR:string = '.standart-form__acceptance'
const HEADER__CLOSE_SEARCH_BUTTON_SELECTOR:string = '.header__search-close-icon'
const HEADER__SEARCH_SELECTOR:string = '.header__search-container'
const OPEN_CART_SELECTOR:string = '.base-icon_cart-js-selector-header'
const OPEN_FORM_SELECTOR:string = '.base-icon_profile-js-selector-header'
const HEADER__SEARCH_INPUT_SELECTOR:string = '.header__search'
const CARTLIST_SELECTOR:string = '.header__cart-items'
const BOTTOM_MENU_SELECTOR:string = '.bottom-nav__menu'
const BOTTOM_MENU_OPENED_CLASS:string = 'bottom-nav__menu_opened'
const BOTTOMNAV_MENU_BUTTON_SELECTOR:string = '.bottom-nav__button_menu'
const CART_ITEM_TEMPLATE_SELECTOR:string = '.header__cart-item-template'
const CART_ITEM_SELECTOR:string = '.header__cart-item-start-selector'
const CART_ITEM_START_CLASS:string = 'header__cart-item-start-selector'
const JS_ACTIVE_CLASS:string = 'js-added-active'
const OVERLAY_POPUP_SELECTOR:string = '.standart-overlay_popup'

//types declarations

type typeCartItem = {
    name: string
    description: string
    selector: string
    class: string
    price: number
    amount: number
    image_info: cartImageInfo
}

type typeCartInfo = {
    isEmpty: boolean
    total: number
    elements: number
    itemsTotal: number
}

type cartImageInfo = {
    path: string
    path_webp: string
    alt: string
}

//constants
const OVERLAY_POPUP:HTMLElement = document.querySelector(OVERLAY_POPUP_SELECTOR)
const OPEN_CART_BTN:HTMLElement = document.querySelector(OPEN_CART_SELECTOR)
const OPEN_FORM_BTN:HTMLElement = document.querySelector(OPEN_FORM_SELECTOR)
const CART_ITEM_TEMPLATE:HTMLTemplateElement = document.querySelector(CART_ITEM_TEMPLATE_SELECTOR)
const CART_ITEM_NODE = CART_ITEM_TEMPLATE.content.querySelector(CART_ITEM_SELECTOR).cloneNode(true)
const ADD_DOOR1_BTN:HTMLElement = document.querySelector(ADD_DOOR1_BTN_SELECTOR)
const ADD_DOOR2_BTN:HTMLElement = document.querySelector(ADD_DOOR2_BTN_SELECTOR)
const ADD_DOOR3_BTN:HTMLElement = document.querySelector(ADD_DOOR3_BTN_SELECTOR)
const CART_ELEMENT:HTMLElement = document.querySelector('.header__cart-block')
const ADD_DOOR4_BTN:HTMLElement = document.querySelector(ADD_DOOR4_BTN_SELECTOR)
const BOTTOMNAV_MENU_BUTTON:HTMLElement = document.querySelector(BOTTOMNAV_MENU_BUTTON_SELECTOR)
const BOTTOM_MENU:HTMLElement = document.querySelector(BOTTOM_MENU_SELECTOR)
const CARTLIST:HTMLTemplateElement = document.querySelector(CARTLIST_SELECTOR)
const CART_TOTAL:HTMLSpanElement = document.querySelector('.header__class-total')
let NO_ITEMS_ELEMENT:HTMLElement = CARTLIST.querySelector(NO_ITEMS_SELECTOR)
const ITEMS_TOTAL_ELEMENT:HTMLParagraphElement = OPEN_CART_BTN.querySelector('.header__cart-total-display')
const HEADER__SEARCH_INPUT:HTMLElement = document.querySelector(HEADER__SEARCH_INPUT_SELECTOR)
const HEADER__CLOSE_SEARCH_BUTTON:HTMLElement = document.querySelector(HEADER__CLOSE_SEARCH_BUTTON_SELECTOR)
const HEADER__SEARCH:HTMLElement = document.querySelector(HEADER__SEARCH_SELECTOR)
const CHECKBOX:HTMLElement = document.getElementById(CHECKBOX_SELECTOR)
const CHECKBOX_CONTAINER:HTMLElement = document.querySelector(CHECKBOX_CONTAINER_SELECTOR)


//objects
const CART_INFO:typeCartInfo = {
    isEmpty: true,
    total: 0,
    elements: 0,
    itemsTotal: 0
}

let door1:typeCartItem = {
    name: 'Браво-22 Snow Melinga',
    description: 'Межкомнатная дверь',
    selector: '.header__cart-item_door1',
    class: 'header__cart-item_door1',
    price: 18600,
    amount: 0,
    image_info: {
        path: './includes/images/header/door-1-full.png',
        path_webp: './includes/images/header/door-1-full.webp',
        alt: 'Межкомнатная дверь Браво-22 Snow Melinga, no magic fog'
    }
}

let door3:typeCartItem = {
    name: 'Тестовая дверь',
    description: 'Межкомнатная дверь',
    selector: '.header__cart-item_door3',
    class: 'header__cart-item_door3',
    price: 25000,
    amount: 0,
    image_info: {
        path: './includes/images/header/door-1-full.png',
        path_webp: './includes/images/header/door-1-full.webp',
        alt: 'Тестовая дверь'
    }
}
let door4:typeCartItem = {
    name: 'Тестовая дверь 2',
    description: 'Межкомнатная дверь',
    selector: '.header__cart-item_door4',
    class: 'header__cart-item_door4',
    price: 250000,
    amount: 0,
    image_info: {
        path: './includes/images/header/door-1-full.png',
        path_webp: './includes/images/header/door-1-full.webp',
        alt: 'Тестовая дверь'
    }
}

let door2:typeCartItem = {
    name: 'Браво-22 Snow Melinga / Magic Fog',
    description: 'Межкомнатная дверь',
    selector: '.header__cart-item_door2',
    class: 'header__cart-item_door2',
    price: 300600,
    amount: 0,
    image_info: {
        path: './includes/images/header/door-2-full.png',
        path_webp: './includes/images/header/door-2-full.webp',
        alt: 'Межкомнатная дверь Браво-22 Snow Melinga'
    }
}

//functions

function renderCartTotal():void {
    CART_TOTAL.textContent = `${CART_INFO.total}`
}

function getCartItem(cartItemObject:typeCartItem):HTMLElement {
    return document.querySelector(cartItemObject.selector)
}

function increaseAmount(cartItemObject:typeCartItem):void {
    const CART_ITEM_ELEMENT:HTMLElement = getCartItem(cartItemObject)
    const AMOUNT_ELEMENT:HTMLParagraphElement = CART_ITEM_ELEMENT.querySelector(CART_ITEM_AMOUNT_SELECTOR)
    const PRICE_ELEMENT:HTMLParagraphElement = CART_ITEM_ELEMENT.querySelector(CART_ITEM_PRICE_SELECTOR)
    cartItemObject.amount +=1
    CART_INFO.total += cartItemObject.price
    CART_INFO.itemsTotal += 1
    renderItemsTotal()
    renderCartTotal()
    renderNewItemAmount(AMOUNT_ELEMENT, cartItemObject.amount)
    renderNewTotalOfItem(PRICE_ELEMENT, cartItemObject.price * cartItemObject.amount)
}

function blurInput(input:HTMLElement):void {
    input.blur()
}

function placeholderName(element:HTMLElement):void {
    element.classList.toggle(JS_ACTIVE_CLASS)
}

function toggleBottomMenu():void {
    BOTTOM_MENU.classList.toggle(BOTTOM_MENU_OPENED_CLASS)
}

function renderItemInCart(cartItemObject:typeCartItem):void {
    CART_INFO.isEmpty = false
    CART_INFO.elements += 1
    CART_INFO.itemsTotal +=1
    renderItemsTotal()
    ITEMS_TOTAL_ELEMENT.classList.remove('d-none')
    console.log(!NO_ITEMS_ELEMENT.classList.contains('d-none'))
    if (!NO_ITEMS_ELEMENT.classList.contains('d-none')) {
        NO_ITEMS_ELEMENT.classList.add('d-none')
    }
    let cartItemTemplateCopy:Node = CART_ITEM_NODE.cloneNode(true)
    CARTLIST.appendChild(cartItemTemplateCopy)
    let cartItem:HTMLTemplateElement = CARTLIST.querySelector(CART_ITEM_SELECTOR)
    let cartItemDescriptionElement:HTMLElement = cartItem.querySelector('.header__cart-item-description')
    let cartItemNameElement:HTMLElement = cartItem.querySelector('.header__cart-item-name')
    let cartItemPriceElement:HTMLParagraphElement = cartItem.querySelector(CART_ITEM_PRICE_SELECTOR)
    let cartItemPathPNGElement:HTMLSourceElement = cartItem.querySelector('.path-png')
    let cartItemPathWEBPElement:HTMLSourceElement = cartItem.querySelector('.path-webp')
    let cartItemImgElement:HTMLImageElement = cartItem.querySelector('.header__cart-item-image')
    let cartItemAmountElement:HTMLParagraphElement = cartItem.querySelector(CART_ITEM_AMOUNT_SELECTOR)
    const ITEM_DECREASE_BTN = cartItem.querySelector('.header__change-items-amount-button_reduce')
    const ITEM_ADD_BTN = cartItem.querySelector('.header__change-items-amount-button_add')
    cartItem.classList.remove(CART_ITEM_START_CLASS)
    cartItem.classList.add(cartItemObject.class)
    cartItemNameElement.textContent = cartItemObject.name
    cartItemDescriptionElement.textContent = cartItemObject.description
    cartItemPriceElement.textContent = `${cartItemObject.price} Р`
    cartItemPathPNGElement.srcset = cartItemObject.image_info.path
    cartItemPathWEBPElement.srcset = cartItemObject.image_info.path_webp
    cartItemImgElement.alt = cartItemObject.image_info.alt
    cartItemAmountElement.textContent = `${cartItemObject.amount}`
    ITEM_DECREASE_BTN.addEventListener('click', () => {decreaseAmount(cartItemObject)})
    ITEM_ADD_BTN.addEventListener('click', () => {increaseAmount(cartItemObject)})
}

function renderNewItemAmount(amountElement:HTMLParagraphElement, newAmount:number) {
    amountElement.textContent = `${newAmount}`
}
function renderItemsTotal():void {
    ITEMS_TOTAL_ELEMENT.textContent =  `${CART_INFO.itemsTotal}`
}

function decreaseAmount(cartItemObject:typeCartItem):void {
    const CART_ITEM_ELEMENT:HTMLElement = getCartItem(cartItemObject)
    console.log(CART_ITEM_ELEMENT)
    const AMOUNT_ELEMENT:HTMLParagraphElement = CART_ITEM_ELEMENT.querySelector(CART_ITEM_AMOUNT_SELECTOR)
    const PRICE_ELEMENT:HTMLParagraphElement = CART_ITEM_ELEMENT.querySelector(CART_ITEM_PRICE_SELECTOR)
    if (cartItemObject.amount > 1) {
        cartItemObject.amount -= 1
        CART_INFO.total -= cartItemObject.price
        CART_INFO.itemsTotal -= 1
        renderItemsTotal()
        renderCartTotal()
        renderNewTotalOfItem(PRICE_ELEMENT, cartItemObject.price * cartItemObject.amount)
        renderNewItemAmount(AMOUNT_ELEMENT, cartItemObject.amount)
    }
    else if (cartItemObject.amount === 1) {
        cartItemObject.amount -= 1
        CART_INFO.total -= cartItemObject.price
        CART_INFO.elements -= 1
        CART_INFO.itemsTotal -= 1
        if (CART_INFO.elements === 0) {
            CART_INFO.isEmpty = true
            NO_ITEMS_ELEMENT.classList.remove('d-none')
            ITEMS_TOTAL_ELEMENT.classList.add('d-none')
        }
        renderCartTotal()
        CARTLIST.removeChild(CART_ITEM_ELEMENT)
    }
    else {
        return
    }
}

function renderNewTotalOfItem(priceElement: HTMLParagraphElement, newTotal:number) {
    priceElement.textContent = `${newTotal} Р`
}

function addItemInCart(cartItem:typeCartItem):void {
    console.log(cartItem)
    if (cartItem.amount === 0)  {
        cartItem.amount += 1
        renderItemInCart(cartItem)
        CART_INFO.total += cartItem.price
        renderCartTotal()
    }
    else {
        const cartItemElement:HTMLElement = getCartItem(cartItem)
        cartItem.amount += 1
        const cartItemElementAmount:HTMLParagraphElement = cartItemElement.querySelector(CART_ITEM_AMOUNT_SELECTOR)
        const PRICE_ELEMENT:HTMLParagraphElement = cartItemElement.querySelector(CART_ITEM_PRICE_SELECTOR)
        renderNewItemAmount(cartItemElementAmount, cartItem.amount)
        renderNewTotalOfItem(PRICE_ELEMENT, cartItem.amount  * cartItem.price)
        CART_INFO.total += cartItem.price
        renderCartTotal()
        CART_INFO.itemsTotal +=1
        renderItemsTotal()
    }}

function toggleAcceptanceClass():void {
    CHECKBOX_CONTAINER.classList.toggle('checked-js-class')
}

function togglePopup():void {
    CART_ELEMENT.classList.add('d-none')
    OVERLAY_POPUP.classList.toggle('d-none')
    OPEN_CART_BTN.classList.toggle('disabled')
}


//event listeners
BOTTOMNAV_MENU_BUTTON.addEventListener('click', toggleBottomMenu)
HEADER__CLOSE_SEARCH_BUTTON.addEventListener('click',() => blurInput(HEADER__SEARCH_INPUT))
HEADER__SEARCH_INPUT.addEventListener("focusout", () => placeholderName(HEADER__SEARCH))
HEADER__SEARCH_INPUT.addEventListener("focus", () => placeholderName(HEADER__SEARCH))

ADD_DOOR1_BTN.addEventListener('click', () => {
    addItemInCart(door1)
})

ADD_DOOR2_BTN.addEventListener('click', () => {
    addItemInCart(door2)
})
ADD_DOOR3_BTN.addEventListener('click', () => {
    addItemInCart(door3)
})

ADD_DOOR4_BTN.addEventListener('click', () => {
    addItemInCart(door4)
})

OPEN_CART_BTN.addEventListener('click',() => {CART_ELEMENT.classList.toggle('d-none')})
CHECKBOX.addEventListener('input', toggleAcceptanceClass)
OPEN_FORM_BTN.addEventListener('click', togglePopup)
