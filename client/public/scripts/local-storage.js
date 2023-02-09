document.addEventListener("DOMContentLoaded", () => {

    const addCartBtn = document.querySelectorAll('.add-cart')

    addCartBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
                
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
                } else { updateCart.push({ id: parseInt(productId), quantity: 1 }) }
                
                //CART UPDATED
                localStorage.setItem("cart", JSON.stringify(updateCart))

            // CART LOCAL STORAGE FALSE
            } else {
                localStorage.setItem("cart", JSON.stringify([{ id: parseInt(productId), quantity: 1 }]))
            }

        })
    })
})


