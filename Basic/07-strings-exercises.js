// 1. Concatena dos cadenas de texto
let cadena1 = "Hola, bienvenido a "
let cadena2 = "JavaScript desde cero."
console.log(cadena1 + cadena2);

// 2. Muestra la longitud de una cadena de texto
let cadenaLarga = "Aprendiendo JavaScript es divertido y emocionante."
console.log(cadenaLarga.length);

// 3. Muestra el primer y último carácter de un string
let primerCaracter = cadenaLarga[0]
let ultimoCaracter = cadenaLarga[cadenaLarga.length - 1]
console.log(primerCaracter + " " + ultimoCaracter)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena2.toUpperCase())
console.log(cadena2.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let multiLinea = `Este es un
string 
en 
varias 
lineas`
console.log(multiLinea)

// 6. Interpola el valor de una variable en un string
console.log(`Hola, estoy ${cadena2} por internet.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadenaLarga.replace(/ /g, "-"))  // / /g es una expresión para buscar los espacios globalmente

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadenaLarga.includes("divertido"))

// 9. Comprueba si dos strings son iguales
let stringA = "JavaScript"
let stringB = "javascript"
console.log(stringA === stringB)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena1.length === cadena2.length)