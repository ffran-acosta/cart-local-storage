document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const url = await fetch(`http://localhost:7009/api/test`)
        const data = await url.json()
        test(data)
    } catch (error) {
        console.log(error)
    }
}

const test = (data) => {
    const span = document.getElementById('span')
    let nombre = data.data.nombre
    let apellido = data.data.apellido
    span.innerHTML = nombre + apellido
}