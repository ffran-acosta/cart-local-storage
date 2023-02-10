const sendCart = async (localStorash) => {
    let body = JSON.stringify(localStorash)
    await fetch(`http://localhost:7010/cart/local-storage`, {
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/json' }
    })
}