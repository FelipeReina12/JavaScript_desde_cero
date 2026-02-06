/*
Métodos útiles de arrays que puedes usar:
.push() → Agregar elemento al final
.length → Tamaño del array
.includes() → Verificar si existe un elemento
array[i] → Acceder a un elemento por índice
*/

// 1. Crea una función que reciba un array de números y un valor N. 
// Retorna un nuevo array solo con los números mayores que N.

function mayoresQueN(arrayNum, N){
    let resultado = []
    for(let num of arrayNum){
        if(num > N){
            resultado.push(num)
        }
    }
    return resultado
}
let res = mayoresQueN([1, 5, 8, 12, 21, 23, 7, 4], 5)
console.log(res)

// 2. Crea una función que reciba un array de números y retorne cuántos números pares hay.
function contarPares(arrayNums){
    let contador = 0
    for(let num of arrayNums){
        if(num % 2 === 0){
            contador += 1
        }
    }
    return contador
}
console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// 3. Crea una función que reciba un array con números positivos y negativos, y retorne la suma SOLO de los números positivos.

// 4. Crea una función que reciba un array de números y retorne el número mayor.

// 5. Crea una función que reciba un array de palabras y retorne solo las palabras que tengan más de 5 letras.

// 6. Crea una función que reciba un número N y retorne un array con todos los números pares desde 0 hasta N.

// 7. Crea una función que reciba un array y retorne un nuevo array con los elementos en orden inverso.

// 8. Crea una función que reciba un array de calificaciones y retorne el promedio SOLO de las notas aprobadas (>=60).

// 9. Crea una función que reciba un array con números repetidos y retorne un nuevo array sin duplicados.

// 10. Crea una función que reciba un array de números y retorne un nuevo array donde cada elemento se multiplique por su índice.

// 11. Crea una función que reciba un array de strings y un número N. Retorna solo los strings que tengan exactamente N letras.

// 12. Crea una función que reciba un array de números y retorne un nuevo array con el cuadrado de cada número, PERO solo si el número es impar.

