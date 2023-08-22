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
var CART_INFO = {
    isEmpty: true,
    total: 0,
    elements: 0
};
var door1 = {
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
};
var door3 = {
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
};
var door4 = {
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
};
var door2 = {
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
};
var CART_ITEM_TEMPLATE_SELECTOR = '.header__cart-item-template';
var CART_ITEM_SELECTOR = '.header__cart-item-start-selector';
var CART_ITEM_START_CLASS = 'header__cart-item-start-selector';
var CART_ITEM_TEMPLATE = document.querySelector(CART_ITEM_TEMPLATE_SELECTOR);
var CART_ITEM_NODE = CART_ITEM_TEMPLATE.content.querySelector(CART_ITEM_SELECTOR).cloneNode(true);
var ADD_DOOR1_BTN_SELECTOR = '.add-door-1';
var ADD_DOOR2_BTN_SELECTOR = '.add-door-2';
var ADD_DOOR3_BTN_SELECTOR = '.add-door-3';
var ADD_DOOR4_BTN_SELECTOR = '.add-door-4';
var ADD_DOOR1_BTN = document.querySelector(ADD_DOOR1_BTN_SELECTOR);
var ADD_DOOR2_BTN = document.querySelector(ADD_DOOR2_BTN_SELECTOR);
var ADD_DOOR3_BTN = document.querySelector(ADD_DOOR3_BTN_SELECTOR);
var ADD_DOOR4_BTN = document.querySelector(ADD_DOOR4_BTN_SELECTOR);
var CARTLIST_SELECTOR = '.header__cart-items';
var CARTLIST = document.querySelector(CARTLIST_SELECTOR);
var CART_ITEM_AMOUNT_SELECTOR = '.header__cart-item-amount';
var CART_ITEM_PRICE_SELECTOR = '.header__cart-item-price';
var NO_ITEMS_SELECTOR = '.header__cart-item_no-items';
var CART_TOTAL = document.querySelector('.header__class-total');
var NO_ITEMS_ELEMENT = CARTLIST.querySelector(NO_ITEMS_SELECTOR);
function renderCartTotal() {
    CART_TOTAL.textContent = "".concat(CART_INFO.total);
}
function renderItemInCart(cartItemObject) {
    CART_INFO.isEmpty = false;
    CART_INFO.elements += 1;
    console.log(!NO_ITEMS_ELEMENT.classList.contains('d-none'));
    if (!NO_ITEMS_ELEMENT.classList.contains('d-none')) {
        NO_ITEMS_ELEMENT.classList.add('d-none');
    }
    var cartItemTemplateCopy = CART_ITEM_NODE.cloneNode(true);
    CARTLIST.appendChild(cartItemTemplateCopy);
    var cartItem = CARTLIST.querySelector(CART_ITEM_SELECTOR);
    var cartItemDescriptionElement = cartItem.querySelector('.header__cart-item-description');
    var cartItemNameElement = cartItem.querySelector('.header__cart-item-name');
    var cartItemPriceElement = cartItem.querySelector(CART_ITEM_PRICE_SELECTOR);
    var cartItemPathPNGElement = cartItem.querySelector('.path-png');
    var cartItemPathWEBPElement = cartItem.querySelector('.path-webp');
    var cartItemImgElement = cartItem.querySelector('.header__cart-item-image');
    var cartItemAmountElement = cartItem.querySelector(CART_ITEM_AMOUNT_SELECTOR);
    var ITEM_DECREASE_BTN = cartItem.querySelector('.header__change-items-amount-button_reduce');
    var ITEM_ADD_BTN = cartItem.querySelector('.header__change-items-amount-button_add');
    cartItem.classList.remove(CART_ITEM_START_CLASS);
    cartItem.classList.add(cartItemObject.class);
    cartItemNameElement.textContent = cartItemObject.name;
    cartItemDescriptionElement.textContent = cartItemObject.description;
    cartItemPriceElement.textContent = "".concat(cartItemObject.price, " \u0420");
    cartItemPathPNGElement.srcset = cartItemObject.image_info.path;
    cartItemPathWEBPElement.srcset = cartItemObject.image_info.path_webp;
    cartItemImgElement.alt = cartItemObject.image_info.alt;
    cartItemAmountElement.textContent = "".concat(cartItemObject.amount);
    ITEM_DECREASE_BTN.addEventListener('click', function () { decreaseAmount(cartItemObject); });
    ITEM_ADD_BTN.addEventListener('click', function () { increaseAmount(cartItemObject); });
}
function renderNewItemAmount(amountElement, newAmount) {
    amountElement.textContent = "".concat(newAmount);
}
function renderNewTotalOfItem(priceElement, newTotal) {
    priceElement.textContent = "".concat(newTotal, " \u0420");
}
function decreaseAmount(cartItemObject) {
    var CART_ITEM_ELEMENT = getCartItem(cartItemObject);
    var AMOUNT_ELEMENT = CART_ITEM_ELEMENT.querySelector(CART_ITEM_AMOUNT_SELECTOR);
    var PRICE_ELEMENT = CART_ITEM_ELEMENT.querySelector(CART_ITEM_PRICE_SELECTOR);
    if (cartItemObject.amount > 1) {
        cartItemObject.amount -= 1;
        CART_INFO.total -= cartItemObject.price;
        renderCartTotal();
        renderNewTotalOfItem(PRICE_ELEMENT, cartItemObject.price * cartItemObject.amount);
        renderNewItemAmount(AMOUNT_ELEMENT, cartItemObject.amount);
    }
    else if (cartItemObject.amount === 1) {
        cartItemObject.amount -= 1;
        CART_INFO.total -= cartItemObject.price;
        CART_INFO.elements -= 1;
        if (CART_INFO.elements === 0) {
            CART_INFO.isEmpty = true;
            NO_ITEMS_ELEMENT.classList.remove('d-none');
        }
        renderCartTotal();
        CARTLIST.removeChild(CART_ITEM_ELEMENT);
    }
    else {
        return;
    }
}
function increaseAmount(cartItemObject) {
    var CART_ITEM_ELEMENT = getCartItem(cartItemObject);
    var AMOUNT_ELEMENT = CART_ITEM_ELEMENT.querySelector(CART_ITEM_AMOUNT_SELECTOR);
    var PRICE_ELEMENT = CART_ITEM_ELEMENT.querySelector(CART_ITEM_PRICE_SELECTOR);
    cartItemObject.amount += 1;
    CART_INFO.total += cartItemObject.price;
    renderCartTotal();
    renderNewItemAmount(AMOUNT_ELEMENT, cartItemObject.amount);
    renderNewTotalOfItem(PRICE_ELEMENT, cartItemObject.price * cartItemObject.amount);
}
function getCartItem(cartItemObject) {
    return document.querySelector(cartItemObject.selector);
}
ADD_DOOR1_BTN.addEventListener('click', function () {
    addItemInCart(door1);
});
ADD_DOOR2_BTN.addEventListener('click', function () {
    addItemInCart(door2);
});
ADD_DOOR3_BTN.addEventListener('click', function () {
    addItemInCart(door3);
});
ADD_DOOR4_BTN.addEventListener('click', function () {
    addItemInCart(door4);
});
function addItemInCart(cartItem) {
    if (cartItem.amount === 0) {
        cartItem.amount += 1;
        renderItemInCart(cartItem);
        CART_INFO.total += cartItem.price;
        renderCartTotal();
    }
    else {
        var cartItemElement = getCartItem(cartItem);
        cartItem.amount += 1;
        var cartItemElementAmount = cartItemElement.querySelector(CART_ITEM_AMOUNT_SELECTOR);
        var PRICE_ELEMENT = cartItemElement.querySelector(CART_ITEM_PRICE_SELECTOR);
        renderNewItemAmount(cartItemElementAmount, cartItem.amount);
        renderNewTotalOfItem(PRICE_ELEMENT, cartItem.amount * cartItem.price);
        CART_INFO.total += cartItem.price;
        renderCartTotal();
    }
}
