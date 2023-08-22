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
}

const CART_INFO:typeCartInfo = {
    isEmpty: true,
    total: 0,
    elements: 0
}

type cartImageInfo = {
    path: string
    path_webp: string
    alt: string
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
    selector: '.header__cart-item_door1',
    class: 'header__cart-item_door1',
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
    selector: '.header__cart-item_door1',
    class: 'header__cart-item_door1',
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
const CART_ITEM_TEMPLATE_SELECTOR:string = '.header__cart-item-template'
const CART_ITEM_SELECTOR:string = '.header__cart-item-start-selector'
const CART_ITEM_START_CLASS:string = 'header__cart-item-start-selector'
const CART_ITEM_TEMPLATE:HTMLTemplateElement = document.querySelector(CART_ITEM_TEMPLATE_SELECTOR)
const CART_ITEM_NODE = CART_ITEM_TEMPLATE.content.querySelector(CART_ITEM_SELECTOR).cloneNode(true)
const ADD_DOOR1_BTN_SELECTOR:string = '.add-door-1'
const ADD_DOOR2_BTN_SELECTOR:string = '.add-door-2'
const ADD_DOOR3_BTN_SELECTOR:string = '.add-door-3'
const ADD_DOOR4_BTN_SELECTOR:string = '.add-door-4'
const ADD_DOOR1_BTN:HTMLElement = document.querySelector(ADD_DOOR1_BTN_SELECTOR)
const ADD_DOOR2_BTN:HTMLElement = document.querySelector(ADD_DOOR2_BTN_SELECTOR)
const ADD_DOOR3_BTN:HTMLElement = document.querySelector(ADD_DOOR3_BTN_SELECTOR)
const ADD_DOOR4_BTN:HTMLElement = document.querySelector(ADD_DOOR4_BTN_SELECTOR)
const CARTLIST_SELECTOR:string = '.header__cart-items'
const CARTLIST:HTMLTemplateElement = document.querySelector(CARTLIST_SELECTOR)
const CART_ITEM_AMOUNT_SELECTOR:string = '.header__cart-item-amount'
const CART_ITEM_PRICE_SELECTOR:string = '.header__cart-item-price'
const NO_ITEMS_SELECTOR:string = '.header__cart-item_no-items'
const CART_TOTAL:HTMLSpanElement = document.querySelector('.header__class-total')
let NO_ITEMS_ELEMENT:HTMLElement = CARTLIST.querySelector(NO_ITEMS_SELECTOR)




function renderCartTotal():void {
    CART_TOTAL.textContent = `${CART_INFO.total}`
}

function renderItemInCart(cartItemObject:typeCartItem):void {
    CART_INFO.isEmpty = false
    CART_INFO.elements += 1
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

function renderNewTotalOfItem(priceElement: HTMLParagraphElement, newTotal:number) {
    priceElement.textContent = `${newTotal} Р`
}



function decreaseAmount(cartItemObject:typeCartItem):void {
    const CART_ITEM_ELEMENT:HTMLElement = getCartItem(cartItemObject)
    const AMOUNT_ELEMENT:HTMLParagraphElement = CART_ITEM_ELEMENT.querySelector(CART_ITEM_AMOUNT_SELECTOR)
    const PRICE_ELEMENT:HTMLParagraphElement = CART_ITEM_ELEMENT.querySelector(CART_ITEM_PRICE_SELECTOR)
    if (cartItemObject.amount > 1) {
        cartItemObject.amount -= 1
        CART_INFO.total -= cartItemObject.price
        renderCartTotal()
        renderNewTotalOfItem(PRICE_ELEMENT, cartItemObject.price * cartItemObject.amount)
        renderNewItemAmount(AMOUNT_ELEMENT, cartItemObject.amount)
    }
    else if (cartItemObject.amount === 1) {
        cartItemObject.amount -= 1
        CART_INFO.total -= cartItemObject.price
        CART_INFO.elements -= 1
        if (CART_INFO.elements === 0) {
            CART_INFO.isEmpty = true
            NO_ITEMS_ELEMENT.classList.remove('d-none')
        }
        renderCartTotal()
        CARTLIST.removeChild(CART_ITEM_ELEMENT)
    }
    else {
        return
    }
}

function increaseAmount(cartItemObject:typeCartItem):void {
    const CART_ITEM_ELEMENT:HTMLElement = getCartItem(cartItemObject)
    const AMOUNT_ELEMENT:HTMLParagraphElement = CART_ITEM_ELEMENT.querySelector(CART_ITEM_AMOUNT_SELECTOR)
    const PRICE_ELEMENT:HTMLParagraphElement = CART_ITEM_ELEMENT.querySelector(CART_ITEM_PRICE_SELECTOR)
    cartItemObject.amount +=1
    CART_INFO.total += cartItemObject.price
    renderCartTotal()
    renderNewItemAmount(AMOUNT_ELEMENT, cartItemObject.amount)
    renderNewTotalOfItem(PRICE_ELEMENT, cartItemObject.price * cartItemObject.amount)
}
function getCartItem(cartItemObject:typeCartItem):HTMLElement {
    return document.querySelector(cartItemObject.selector)
}


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




function addItemInCart(cartItem:typeCartItem):void {
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
    }


}