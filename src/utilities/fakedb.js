// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};

    //get the  cart from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let bookCart = {};

    //get the  cart from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        bookCart = JSON.parse(storedCart);
    }
    return bookCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}