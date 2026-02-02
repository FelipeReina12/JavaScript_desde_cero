// set

// Declaración
let mySet = new Set()  // Crea un set vacío
// console.log(mySet)

mySet = new Set(["Brais", 37, "MoureDev", true])  // Crea un set con valores iniciales
// console.log(mySet)

// Métodos comunes de los sets

//add agrega un nuevo elemento al final del set
mySet.add("Nuevo elemento final")
// console.log(mySet)

// delete elimina un elemento del set que se le pase como parámetro y lo retorna como un booleano
mySet.delete(37)  // Se debe pasar el valor exacto del elemento a eliminar
// console.log(mySet)
// console.log(mySet.delete("MoureDev"))
// console.log(mySet)

// has retorna un booleano que indica si el elemento pasado como parámetro existe en el set
// console.log(mySet.has("Brais"))

// size retorna el número de elementos que tien el set
// console.log(mySet.size)

// Convertir un set a un array
let setArray = Array.from(mySet)  // En from le pasamos el set que queremos convertir
console.log(setArray)

// Convertir un array a un set
let arraySet = new Set(setArray)  // Le pasamos como parámetro el array que queremos convertir
console.log(arraySet)

// La princial diferencia entre un set y un array es que en un set no se permiten elementos duplicados
// por eso no es necesario acceder a los elementos por su índice como en los arrays