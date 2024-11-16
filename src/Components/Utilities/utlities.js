
const setLocalStorage = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString)
}


const getPreviousCart = () => {
    const getCart = localStorage.getItem('cart');
    if (getCart) {
        const cartParse = JSON.parse(getCart);
        return cartParse;
    }
    return []
}


const removeFromLS = (id) => {
    const cart = getPreviousCart();
    const remainingCard = cart.filter(idx => idx !== id);
    setLocalStorage(remainingCard)
}

const adToLs = (id) => {
    const cart = getPreviousCart();
    cart.push(id)
    setLocalStorage(cart)
}



// WishLIST STARTED

const setWishList = (wishlist) => {
    const wishString = JSON.stringify(wishlist);
    localStorage.setItem('wish-list', wishString)
}


const getWishList = () => {
    const getWishList = localStorage.getItem('wish-list');
    if (getWishList) {
        const wishParse = JSON.parse(getWishList);
        return wishParse;
    }
    return []
}

const removeWishList = (id) => {
    const wish = getWishList();
    const remainingWishList = wish.filter(idx => idx !== id);
    setWishList(remainingWishList)
}


const addWishListLs = (id) => {
    const wishlist = getWishList();
    wishlist.push(id);
    setWishList(wishlist);
}





export { adToLs, getPreviousCart, removeFromLS, addWishListLs, getWishList,removeWishList }