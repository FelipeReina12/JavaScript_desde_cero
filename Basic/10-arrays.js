// Estructuras de datos en JavaScript
// Almacenar varios valores en una sola variable
// Arrays es una lista de valores

// Declaración de un array
let array = []  // Más recomendable

let myArray = new Array()  // Otra forma de declarar un array

// Inicializar un array con valores
array = [3]  // Esto agrega un valor al array
myArray = new Array(3)   // Esto agrega un espacio al array

// console.log(array)
// console.log(myArray)

// Agregar varios valores a un array
array = [1, 3, 5, 7, 9]
myArray = new Array(1, 3, 5, 7, 9)

// console.log(array)
// console.log(myArray)

// Se puede mezclar tipos de datos en un array
array = [1, "Felipe", true, 23, "Mecatrónica", null]
myArray = new Array(1, "Felipe", true, 23, "Mecatrónica", null)
// console.log(array)
// console.log(myArray)

// Guardar espacios en un array y darle valores
myArray = new Array(3)  // El array tiene 3 epacios reservados
// myArray[0] = "Nintendo"  // Como estpá vacío, se reserva el espacio 0
myArray[1] = "PlayStation"
myArray[2] = "Xbox"

// console.log(myArray)

// Agregar valores a un array vacío
arry = []  // Array vacío

array[0] = "Rojo"
array[1] = "Verde"
array[2] = "Amarillo"
array[3] = "Azul"
array[4] = 23
array[5] = NaN

// console.log(array)

// Métodos comunes de los ararys
array = [1, "Segundo valor"]
// push es para agregar un valor al final del array
array.push("Tercer valor")
array.push("Felipe")
array.push("Sigue un orden")
array.push("Ultimo valor")

// console.log(array)

// pop elimina el último valor del array y lo devuelve
// array.pop()  // Elimina "Ultimo valor"
// console.log(array.pop())  // Elmina el último valor y lo muestra por consola
// console.log(array)

// shift elimina el primer valor del array y lo devuelve
// array.shift()  // Elimina "1"
// console.log(array.shift())  // Elmina el primer valor y lo muestra por consola
// console.log(array)

// Unshift agrega uno o más elemento al inicio del array
array.unshift("Nuevo primer valor", 2, 3, 4)
// console.log(array)

// length devuelve la cantidad de elementos del array
// console.log(array.length)

// clear vacía el array
// array = []  //Forma de vaciar el array
// // console.log(array)

// array.length = 0  // Otra forma de vaciar el array
// console.log(array)

// slice devuelve una copia de una parte del array dentro de un nuevo array
let nuevoArray = array.slice(1,4)  // Copia desde el índice 1 hasta el 4 sin incluir el 4
// console.log(nuevoArray)

// splice cambia el contenido de un array eliminando elementos desde el índice hasta el número de elementos indicados
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.splice(2,3)  // Elimina desde el índice 2, 3 elementos
// console.log(array)

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.splice(1, 3, "Nuevo elemento a paratir del índice 1")  // Elimina desde el índice 1, 3 elementos y agrega un nuevo elemento
console.log(array)
