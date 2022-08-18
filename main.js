const animales = ["Perro", "Gato", "Iguana", "Caballo"]
const autos = ["Toyota", "Fiat", "Audi", "Renault", "Ford"]
const paises = ["Argentina", "Chile", "Uruguay", "Colombia", "Brasil", "Peru"]

btnAutos = document.getElementById("autos")
btnAnimales = document.getElementById("animales")
btnPaises = document.getElementById('paises')
displayData = document.getElementById("displayData")

function displayArrayAnimales() {
    toHtml = ''
    for (var i = 0; i < animales.length; i++) {
        toHtml += `<li>${animales[i]}</li>`
    }
    displayData.innerHTML = toHtml
}
btnAnimales.addEventListener("click", () => displayArrayAnimales())

function displayArrayAutos() {
    toHtml2 = ''
    for (var i = 0; i < autos.length; i++) {
        toHtml2 += `<li>${autos[i]}</li>`
    }
    displayData.innerHTML = toHtml2
}
btnAutos.addEventListener("click", () => displayArrayAutos())