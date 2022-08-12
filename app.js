let bienvenida = "Bienvenido a la consola de la pagina"

console.log(bienvenida)

const stock = []

class smarthphone {
    constructor(nombre, memoriaInterna, ram, precio){
        this.nombre = nombre
        this.memoriaInterna = memoriaInterna
        this.ram = ram
        this.precio = precio
    }
}

const celular1 = new smarthphone("Samsung S20", "64gb", "6gb", 80000 )
const celular2 = new smarthphone("Iphone X", "32gb", "3gb", 70000)
const celular3 = new smarthphone("Motorola G31", "64gb", "4gb", 50000)
const celular4 = new smarthphone("Xiaomi Poco F4", "128gb", "4gb", 65000)
const celular5 = new smarthphone("Iphone 12", "64gb", "4gb", 100000)
const celular6 = new smarthphone("Samsung S6 Edge", "32gb", "3gb", 30000)
const celular7 = new smarthphone("Xiaomi Redmi 9C", "64gb", "2gb", 40000)
const celular8 = new smarthphone("Samsung Z Fold 2", "128gb", "6gb", 90000)
const celular9 = new smarthphone("Xiaomi Redmi Note 10 Pro", "128gb", "6gb", 85000)

stock.push(celular1,celular2,celular3,celular4,celular5,celular6,celular7,celular8,celular9)
console.log(stock)

for (const smarthphone of stock){
    smarthphone.precio *= 1.20
}

const agregarCelular = () => {
    const nombre = prompt("ingrese el nombre del celular")
    const memoriaInterna = Number(prompt("ingrese su memoria"))
    const ram = Number(prompt("ingrese la ram"))
    const precio = Number(prompt("ingrese el valor"))

stock.push(new smarthphone(nombre, memoriaInterna, ram, precio))
}



//agregarCelular()

//console.log(stock)


let preguntar = prompt("queres agregar algun celular al stock?").toLowerCase

if(preguntar == "si"){
    agregarCelular()
}

