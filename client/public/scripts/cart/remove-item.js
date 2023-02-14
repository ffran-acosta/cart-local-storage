document.addEventListener("DOMContentLoaded", () => {

    //HTML BTN
    const removeItem = document.querySelectorAll('.remove')

    //LOCAL STORAGE
    let lsCart = JSON.parse(localStorage.cart)

    //REMOVE SELECTION
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