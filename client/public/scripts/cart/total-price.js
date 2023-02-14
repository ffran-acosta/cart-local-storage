document.addEventListener('DOMContentLoaded', () => {

    const price = document.querySelectorAll('.p-price')
    const total = document.querySelector('.total')

    const priceDisplay = () => {
        let totalResult = 0
        price.forEach(x => {
            let itemPrice = parseInt(x.innerText)
            totalResult += itemPrice
            total.innerText = `TOTAL: $ ${totalResult}`
        })
    }
    priceDisplay()


    document.addEventListener('click', () => {
        totalResult = 0
        priceDisplay()
    })
})

