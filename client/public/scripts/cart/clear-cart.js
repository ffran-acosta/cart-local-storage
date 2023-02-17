document.addEventListener("DOMContentLoaded", () => {

    const clearCart = document.querySelector('.empty')
    clearCart.addEventListener('click', () =>{
        let emptyLs = []
        let res = window.confirm("Do you want to clear the Cart ?")
        if(res){
            localStorage.removeItem('cart')
            sendCart(emptyLs)
            location.reload()
        }
    })
})