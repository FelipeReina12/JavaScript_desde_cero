// Map
// Es parecido a un diccionario en otros lenguajes 
// Tiene clave y valor

// Declaración
let myMap = new Map() // Crea un map vacío
console.log(myMap)

// Inicialización 
myMap = new Map([
    ["name", "felipe"],
    ["email", "correo@correo.com"],
    ["edad", 23],
    ["ciudad", "Bogotá"],
    ["carrera", "Ingeniería"],
    ["celular", "3245612291"]
])
// Los map no pueden tener claves duplicadas
console.log(myMap)

// Métodos y propiedades comunes de los maps

// set actualiza o agrega un nuevo elemento al map al final
myMap.set("pais", "Colombia")  // Agrega un nuevo elemento al final
myMap.set("ciudad", "Medellín")  // Actualiza el valor de la clave cuidad
console.log(myMap)

// get obtiene el valor de la clave que se pasa como parámetro
console.log(myMap.get("name"))  // Muestra "felipe"
// console.log(myMap.get("surname"))  // Muestra undefined porque no existe esa clave

// has retorna un booleano que indica si la clave existe en el map
console.log(myMap.has("email"))

// delete elimina un elemento del map que se le pase la clave como parámetro y lo retorna como un booleano
console.log(myMap.delete("edad"))
console.log(myMap)

// clear elimina todos los elementos del map
// myMap.clear()
// console.log(myMap)

// keys retorna un iterable con las claves del map
console.log(myMap.keys())

// values retorna un iterable con los valores del map
console.log(myMap.values())

// entries retorna un iterable con los pares clave - valor del map
console.log(myMap.entries())

// size retorna el número de elementos que tiene el map
console.log(myMap.size)