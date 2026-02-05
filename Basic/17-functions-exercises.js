// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
suma = ((a, b) => console.log( a+ b))
// suma(4, 8)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
array = [5, 8, 6, 2, 9, 45, 1, 6, 12, 4, 15]

function leer(){
    return Math.max(...array)
}
const max = leer()
// console.log(leer())

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numeroVocales(string){
    const vocales = ["a", "e", "i", "o", "u"];
    let suma = 0;

    for(let char of string){
        if(vocales.includes(char)){
            suma += 1;
        }
    }
    return suma;
}

let resultado = numeroVocales("JavaScript desde cero")
// console.log(resultado)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function mayus (arrayStrings){
    return arrayStrings.map(p => p.toUpperCase())
}
let result = mayus(["Hola", "mayus", "Java"])
console.log(result)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primoNoPrimo(num){
    if (num <= 1) {
        return `El numero ${num} no es primo`;
    } else if (num === 2) {
        return `El numero ${num} es primo`;
    } else if (num % 2 === 0) {
        return `El numero ${num} no es primo`;
    } else {
        // Chequea divisores impares hasta la raíz cuadrada
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return `El numero ${num} no es primo`;
            }
        }
        return `El numero ${num} es primo`;
    }
}
let primo = primoNoPrimo(10)
console.log(primo)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
nuevoArray = []
function union(array1, array2){
    for(let char of array1){
        if(array2.includes(char)){
            nuevoArray.push(char)
        } 
    }
}
union(["2", 55, 4, "JavaScrit", "python", "camisa"], ["2", 2, "JavaScript", "python", 55])
console.log(nuevoArray)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(arrayNumeros){
    let suma = 0
    for(let value of arrayNumeros){
        if(value % 2 == 0){
            suma += value
        }
    }
    return suma
}
const res = sumaPares([2, 3, 4, 8, 23])
console.log(res)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado