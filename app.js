let bienvenida = "Bienvenido a la consola de la pagina"

console.log(bienvenida)

const stock = []

class Smarthphone {
    constructor(nombre, memoriaInterna, ram, precio){
        this.nombre = nombre
        this.memoriaInterna = memoriaInterna
        this.ram = ram
        this.precio = precio
    }
}

const celular1 = stock.push(new Smarthphone("Samsung S20", "64gb", "6gb", 80000 ))
const celular2 = stock.push(new Smarthphone("Iphone X", "32gb", "3gb", 70000))
const celular3 = stock.push(new Smarthphone("Motorola G31", "64gb", "4gb", 50000))
const celular4 = stock.push(new Smarthphone("Xiaomi Poco F4", "128gb", "4gb", 65000))
const celular5 = stock.push(new Smarthphone("Iphone 12", "64gb", "4gb", 100000))
const celular6 = stock.push(new Smarthphone("Samsung S6 Edge", "32gb", "3gb", 30000))
const celular7 = stock.push(new Smarthphone("Xiaomi Redmi 9C", "64gb", "2gb", 40000))
const celular8 = stock.push(new Smarthphone("Samsung Z Fold 2", "128gb", "6gb", 90000))
const celular9 = stock.push(new Smarthphone("Xiaomi Redmi Note 10 Pro", "128gb", "6gb", 85000))


console.log(stock)


const boton = document.getElementById('boton')

boton.innerText = "No soy un boton"


const h1 = document.createElement('h1')
h1.innerHTML = "<h1>Fui creado en JS</h1>"

document.body.append(h1)

boton.addEventListener('click', () => {
    console.log("si lo era")
})

const userNuevo = []

const email = document.querySelector('#exampleInputEmail1')
const Nombre = document.querySelector('#exampleInputText1')
const form = document.querySelector('formulario')

form.addEventListener ('submit', (e) =>{
    e.preventDefault()

    const email = email.value
    const Nombre = Nombre.value

    const user = {
        email: email,
        Nombre: Nombre
    }

    userNuevo.push(user)

    console.log(userNuevo)


})