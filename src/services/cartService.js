// getCart pr afficher le panier , addToCart , RemoveFromCart
//Ici c pas un composant c juste un list de fontion quon utilisera ds les compoennts

import axios from "axios";


const cartItems = []

function add(selectedBook) {
    console.log("J'ai cliqué sur un produitt:");

    const index = cartItems.findIndex((x) => x.id === selectedBook.id) 
    if (index != -1) {
        cartItems[index] = { ...selectedBook, qty: cartItems[index].qty + 1 }
        

    } else {
     
        cartItems.push({ ...selectedBook, qty: 1 }) 
    }


    console.log(selectedBook)
}

function remove(selectedBook) {
    console.log("J'ai cliqué sur un produitt:");

    const index = cartItems.findIndex((x) => x.id === selectedBook.id) 
    console.log("the cart item is", cartItems[index])

    if (index != -1) {

        if (cartItems[index].qty == 1) {
            cartItems.splice(index, 1) 
        }
        else if (cartItems[index].qty > 1) {
            cartItems[index] = {
                ...selectedBook, qty: cartItems[index].qty - 1
            }
        }
    }
    else { 
        return
    }

}

function getCartItems() {
    return cartItems;
}



function postOrder(userDetails) {
    console.log(userDetails)
    
    const amount = cartItems.reduce((sum, item) => {
        sum += (item.price * item.qty)
        return sum
    }, 0)
    console.log('amount is', amount)
    const data = { ...userDetails, books: cartItems, amount }
    return axios.post('https://logical-calf-89.hasura.app/api/rest/orders', data)
        .then(request => request.data.insert_orders_one)


}



export const cartService = { add, remove, getCartItems, postOrder };