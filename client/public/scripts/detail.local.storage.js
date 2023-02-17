const cartQuantity = () => {
    return localStorage.cart ? JSON.parse(localStorage.cart).length : 0
}

document.addEventListener("DOMContentLoaded", () => {

    const headerQuantity = document.querySelector('.quantity-header')
    headerQuantity.innerText = cartQuantity()

    // SEND LOCAL STORAGE TO BACKEND FOR RENDER THE CART
    const cartIcon = document.querySelector('.icon')
    cartIcon.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.cart)
        sendCart(cart)
    })

    const addCartBtn = document.querySelector('.add-cart')
    addCartBtn.addEventListener("click", (e) =>{
        console.log('hola')

        // CART LOCAL STORAGE TRUE
        let productId = e.target.dataset.id
        if (localStorage.cart) {
            let cart = JSON.parse(localStorage.cart)
            let productAtCart = cart.find(x => x.id == productId)
            let updateCart = cart

            // PRODUCT TRUE, QUANTITY ++
            if (productAtCart) {
                updateCart = cart.map(product => {
                    if (product.id == productId) {
                        product.quantity++
                    } return product
                })
                // PRODUCT FALSE, NEW OBJET
            } else {
                updateCart.push({ id: parseInt(productId), quantity: 1 })
            }

            //CART UPDATED
            localStorage.setItem("cart", JSON.stringify(updateCart))

            // CART LOCAL STORAGE FALSE
        } else {
            localStorage.setItem("cart", JSON.stringify([{ id: parseInt(productId), quantity: 1 }]))
        }
        headerQuantity.innerText = cartQuantity()
    })
})