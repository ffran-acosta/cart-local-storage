const sendCart = async (localStorash) => {
    let body = JSON.stringify(localStorash)
    await fetch(process.env.URL_CLIENT_POST || `http://localhost:7010/cart/local-storage`, {
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/json' }
    })
}