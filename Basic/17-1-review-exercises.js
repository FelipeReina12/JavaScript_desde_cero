/*
Métodos útiles de arrays que puedes usar:
.push() → Agregar elemento al final
.length → Tamaño del array
.includes() → Verificar si existe un elemento
array[i] → Acceder a un elemento por índice
*/
// 1. Crea una función que reciba un array de números y un valor N.
// Retorna un nuevo array solo con los números mayores que N.

function mayoresQueN(arrayNum, N) {
  let resultado = [];
  for (let num of arrayNum) {
    if (num > N) {
      resultado.push(num);
    }
  }
  return resultado;
}
let res = mayoresQueN([1, 5, 8, 12, 21, 23, 7, 4], 5);
// console.log(res)

// 2. Crea una función que reciba un array de números y retorne cuántos números pares hay.
function contarPares(arrayNums) {
  let contador = 0;
  for (let num of arrayNums) {
    if (num % 2 === 0) {
      contador += 1;
    }
  }
  return contador;
}
// console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 3. Crea una función que reciba un array con números positivos y negativos, y retorne la suma SOLO de los números positivos.
function posNeg(numeros) {
  let suma = 0;
  for (let value of numeros) {
    if (value % 2 === 0) {
      suma += value;
    }
  }
  return suma;
}
// console.log(posNeg([2, 4, 5]))

// 4. Crea una función que reciba un array de números y retorne el número mayor.
function mayorNumero(arrayNumeros) {
  return Math.max(...arrayNumeros);
}
// console.log(mayorNumero([2,3,6, 12]))

// 5. Crea una función que reciba un array de palabras y retorne solo las palabras que tengan más de 5 letras.
function palabrasMayores(stringArray) {
  return stringArray.filter((palabra) => palabra.length >= 5);
}
const resultado = palabrasMayores(["jfla", "fjdpafasdfs"]);
// console.log(resultado)

// 6. Crea una función que reciba un número N y retorne un array con todos los números pares desde 0 hasta N.
function loop(N) {
  let array = [];
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}
const vari = console.log(loop(8));

// 7. Crea una función que reciba un array y retorne un nuevo array con los elementos en orden inverso.
function inversor(arrayElementos) {
  return arrayElementos.slice().reverse(); // Slice crea una copia del array
}
const inv = inversor(["Hola", 1, 2, 3]);
console.log(inv);

// 8. Crea una función que reciba un array de calificaciones y retorne el promedio SOLO de las notas aprobadas (>=60).

// 9. Crea una función que reciba un array con números repetidos y retorne un nuevo array sin duplicados.

// 10. Crea una función que reciba un array de números y retorne un nuevo array donde cada elemento se multiplique por su índice.

// 11. Crea una función que reciba un array de strings y un número N. Retorna solo los strings que tengan exactamente N letras.

// 12. Crea una función que reciba un array de números y retorne un nuevo array con el cuadrado de cada número, PERO solo si el número es impar.
