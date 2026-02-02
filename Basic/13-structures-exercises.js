/* 
Diferencias entre Arrrays, Sets y Maps

-Arrays: 
    -Estructura: Lista ordenada de elementos
    -Acceso: Por índice numérico
    -Duplicados: Pemite elementos duplicados
    -Tipos de datos: Puede contener cualquier tipo de dato

-Sets:
    -Estructura: Colección de elementos únicos
    -Acceso: No tiene índices, solo se itera
    -Duplicados: No permite elementos duplicados (Principal diferencia con arrays)
    -Tipos de datos: Puede contener cualquier tipo de dato

-Maps:
    -Estructura: Coleción de pares clave-valor (Como un diccionario)
    -Acceso: Por clave (no necesariamente numérica)
    -Claves: No permite claves duplicadas 
    -Valores: Puede contener cualquier tipo de dato como valor
    -Tipos de datos: Puede contener cualquier tipo de dato 

*/

// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "Conejo", "Tortuga", "Pájaro"]

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Hamster") // Al principio
animales.push("Pez")  // Al final

// console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1)  // Elimina el elemento en el índice 2

console.log(animales)

// 4. Crea un set que almacene cinco libros
let libros = new Set([
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "La sombra del viento",
    "IT",
    "El resplandor"
])

console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("1984")
libros.add("IT")  // Repetido

console.log(libros)  // Se observa que "IT" no se añade dos veces

// 6. Elimina uno concreto a tu elección
libros.delete("La sombra del viento")

console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let mesesMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])

console.log(mesesMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mesesMap.has(5))
console.log(mesesMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mesesMap.set("Meses de verano", ["Junio", "Julio", "Agosto"])

console.log(mesesMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let consolasArray = ["Nintendo", "PlayStation", "Xbox", "Pc", "Ayn Thor"]
let consolasSet = new Set(consolasArray)

console.log(consolasSet)

let consolasMap = new Map()
consolasMap.set("consolas", consolasSet)
console.log(consolasMap) 