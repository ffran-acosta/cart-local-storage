document.addEventListener("DOMContentLoaded", () => {

    const removeItem = document.querySelectorAll('.remove')

    let lsCart = JSON.parse(localStorage.cart)

    removeItem.forEach(btn => {
        btn.addEventListener("click", () => {
            let button = btn.dataset.id
            let test = lsCart.filter(x => x.id != button)
            localStorage.setItem("cart", JSON.stringify(test))
            sendCart(test)
            location.reload()
        })
    })
        

})