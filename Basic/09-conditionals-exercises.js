// 1. Imprime por consola tu nombre si una variable toma su valor
const myName = "Felipe"

if (myName === "Felipe"){
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const username = "admin"
const password = 210722

if (username === "admin" && password === 210722){
    console.log("Acceso concedido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -5

if (number > 0){
    console.log("El número es positivo")
} else {
    console.log("El número es negativo o cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16

if (age >= 18){
    console.log("Puedes votar")
} else {
    console.log(`No puedes votar, aún te faltan ${18 - age} años para poder hacerlo`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const age1 = 20
const caso = age1 >= 18 ? "adulto" : "menor"
console.log(caso)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const mes = 2
if (mes >= 3 && mes <= 5){
    console.log("Estamos en primavera")
} else if (mes >= 6 && mes <= 8){
    console.log("Estamos en verano")
} else if (mes >= 9 && mes <= 11){
    console.log("Estamos en otoño")
} else {
    console.log("Estamos en invierno")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch
if(mes === 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        console.log("El mes tiene 31 días")
} else if (mes === 2){
        console.log("El mes tiene 28 o 29 días")
} else if (mes === 4 || mes == 6 || mes == 9 || mes == 11){
        console.log("El mes tiene 30 días")
} else {
        console.log("Mes no válido")
}
 
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "frances"

switch(idioma) {
    case "español":
        console.log("Hola")
        break;
    case "ingles":
        console.log("Hello")
        break;
    case "frances":
        console.log("Bonjour")
        break;
    default:
        console.log("Idioma no soportado")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case mes >= 3 && mes <= 5:
        console.log("Estamos en primavera")
        break;
    case mes >= 6 && mes <= 8:
        console.log("Estamos en verano")
        break;
    case mes >= 9 && mes <= 11:
        console.log("Estamos en otoño")    
        break;
    default:
        console.log("Estamos en invierno")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(mes){
    case 1, 3, 5, 7, 8, 10, 12:
        console.log("El mes tiene 31 días")
        break;
    case 2:
        console.log("El mes tiene 28 o 29 días")
        break;
    case 4, 6, 9, 11:
        console.log("El mes tiene 30 días")
        break;
    default:
        console.log("Mes no válido")
}