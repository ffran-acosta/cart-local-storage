document.addEventListener("DOMContentLoaded", () => {

    const clearCart = document.querySelector('.empty')
    clearCart.addEventListener('click', () =>{
        let emptyLs = []
        localStorage.removeItem('cart')
        sendCart(emptyLs)
        location.reload()
    })
})