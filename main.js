const animales = ["Perro", "Gato", "Iguana", "Caballo"]
const autos = ["Toyota", "Fiat", "Audi", "Renault", "Ford"]
const paises = ["Argentina", "Chile", "Uruguay", "Colombia", "Brasil", "Peru"]

// btnAutos = document.getElementById("autos")
// btnAnimales = document.getElementById("animales")
// btnPaises = document.getElementById('paises')

displayData = document.getElementById("displayData")

var botones = document.querySelectorAll("button")
console.log(botones)

// // LLama funcion Animales
// function displayArrayAnimales() {
//     toHtml = ''
//     for (var i = 0; i < animales.length; i++) {
//         toHtml += `<li>${animales[i]}</li>`
//     }
//     displayData.innerHTML = toHtml
// }
// btnAnimales.addEventListener("click", () => displayArrayAnimales())

// //Llamo funcion Autos
// function displayArrayAutos() {
//     toHtml2 = ''
//     for (var i = 0; i < autos.length; i++) {
//         toHtml2 += `<li>${autos[i]}</li>`
//     }
//     displayData.innerHTML = toHtml2
// }
// btnAutos.addEventListener("click", () => displayArrayAutos())

// //Llamo funcion Paises
// function displayArrayPaises() {
//     toHtml3 = ''
//     for (var i = 0; i < paises.length; i++) {
//         toHtml3 += `<li>${paises[i]}</li>`
//     }
//     displayData.innerHTML = toHtml3
// }
// btnPaises.addEventListener("click", () => displayArrayPaises())


function displayArray(id) {
    console.log(id)
    toHtml = ''
    var arratAIterear;

    if (id == "animales") {
        arratAIterear = animales
    }
    else if (id == "autos") {
        arratAIterear = autos
    } else { arratAIterear = paises }

    for (var i = 0; i < arratAIterear.length; i++) {
        toHtml += `<li>${arratAIterear[i]}</li>`
    }
    displayData.innerHTML = toHtml
}

// btnAnimales.addEventListener("click", (event) => displayArray(event.target.id))
// btnPaises.addEventListener("click", (event) => displayArray(event.target.id))
// btnAutos.addEventListener("click", (event) => displayArray(event.target.id))

function botonesSelected(){
    for(var i= 0; i<botones.length;i++){
        botones[i].addEventListener('click',(event)  => displayArray(event.target.id))
    }
}
botonesSelected()