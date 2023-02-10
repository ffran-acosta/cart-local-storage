document.addEventListener("DOMContentLoaded", () => {

    //HTML ELEMENTS
    const incrementBtn = document.querySelectorAll('.increment')
    const decrementBtn = document.querySelectorAll('.decrement')
    const quantity = document.querySelectorAll('.p-quantity')
    const price = document.querySelectorAll('.p-price')

    //LOCAL STORAGE
    let lsCart = JSON.parse(localStorage.cart)

    //INCREMENT FUNCTION
    incrementBtn.forEach(btn => {

        //BUTTON FUNCTION
        btn.addEventListener('click', (e) =>{
            let button = e.target.dataset.id
            let currentQuiantity
            lsCart.map(element => {
                if(element.id == button){
                    currentQuiantity = element.quantity++
                } return element
            })
            localStorage.setItem("cart", JSON.stringify(lsCart))
            sendCart(lsCart)

            //DISPLAY QUANTITY
            quantity.forEach(element => {
                if(element.dataset.id == button){
                    element.innerText = currentQuiantity + 1
                }
            })

            //DISPLAT PRICE
            price.forEach(element => {
                let textPriceParse = parseInt(element.innerText)
                let originPrice = textPriceParse / (currentQuiantity)
                if (element.dataset.id == button) {
                    element.innerText = (originPrice * (currentQuiantity + 1))
                }
            })
        })
    })

    //DECREMENT FUNCTION
    decrementBtn.forEach(btn => {
        console.log()

        //BUTTON FUNCTION
        btn.addEventListener('click', (e) => {

            let button = e.target.dataset.id
            let currentQuiantity
            lsCart.map(element => {
                if (element.id == button && element.quantity > 1) {
                    currentQuiantity = element.quantity--

                } return element
            })
            localStorage.setItem("cart", JSON.stringify(lsCart))
            sendCart(lsCart)

            //DISPLAY QUANTITY
            quantity.forEach(element => {
                if (element.dataset.id == button && currentQuiantity > 0) {
                    element.innerText = currentQuiantity -1 
                }
            })

            //DISPLAY PRICE
            price.forEach(element => {
                let textPriceParse = parseInt(element.innerText)
                let originPrice = textPriceParse / (currentQuiantity)
                if (element.dataset.id == button && originPrice > 1) {
                    element.innerText = (originPrice * (currentQuiantity - 1))
                }
            })
        })
    })

})