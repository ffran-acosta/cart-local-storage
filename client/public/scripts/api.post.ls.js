const sendCart = async (localStorash) => {
    let body = JSON.stringify(localStorash)
    await fetch(`https://cart-client-production.up.railway.app/cart/local-storage`, {
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/json' }
    })
}