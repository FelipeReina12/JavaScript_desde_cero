// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i <= 20; i++){
    console.log(`Número: ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for(let i = 1; i <= 100; i++){
    suma += i
}
console.log(`Suma total: ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        console.log(`Número par: ${i}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Alisson", "Stella", "Julio", "Felipe", "Julian"]
for(let value of nombres){
    console.log(`Nombre: ${value}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let vocales = ["a", "e", "i", "o", "u"]
let texto = "Hola, este es un ejemplo de texto"
let suma1 = 0

for(let char of texto){  // Recorre cada caracter del texto
    if(vocales.includes(char)){  // verifica si las vocales están en el caracter que se está recorriendo
        suma1 += 1  // Si es así, suma 1
    }
}
console.log(`Número de vocales: ${suma1}`)  // Muestra el número de vocales que se sumaron 

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let num = [2, 4, 6, 8, 10]
let mult = 1

for(let i of num){
    mult *= i
}
console.log(`El producto de los números es: ${mult}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let numero = 5

for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${numero} = ${i * numero}`)
}

// 8. Usa un bucle para invertir una cadena de texto
string = "JavaScript"
let reversedString = ""  // Cadena vacía para almacenar la cadena invertida

for(let char of string){
    reversedString = char + reversedString  // Agrega el caracter al inicio de la nueva cadena
}
console.log(`Cadena invertida: ${reversedString}`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib = [0, 1]  // Array para almacenar los números de Fibonacci

for (let i = 2; i < 10; i++){
    fib[i] = fib[i - 1] + fib[i -2]  // Cada número es la suma de los dos anteriores
}
console.log(fib)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numbers = [4, 12, 2, 18, 14, 7, 25, 9, 3]
let mayores10 = []  // Array para almacenar los números mayores a 10

for(let i of numbers){
    if(i > 10){
        mayores10.push(i)  // Agrega el número al nuevo array si es mayor a 10
    }
}
console.log('Números mayores a 10:')
console.log(mayores10)