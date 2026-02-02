// Loops o bucles
// Un loop es una estructura de control que permite repetir un bloque de código mientras se cumpla una condición específica

// for
// Se ejecuta mientras una condición sea verdadera
for (let i = 0; i < 5; i++) {
  // Código a repetir
//   console.log(`Hola, mundo! ${i} veces`);
}

const numbers = [1, 2, 3, 4, 5]
for (let i = 0 ; i < numbers.length; i++) {
    // console.log(`Elemento: ${numbers[i]}`)  // Accede a cada elemento del array
}

// While
// Se evlúa la condición antes de ejecutar el bloque de código
// Se diferencia del for en que no tiene una incialización ni un incremento automático
// Evalua una variable que estaba definida previamente
let i = 0
while(i <= 5){
    // console.log(`Número: ${i}`)
    i++
}

// Do while
// Se ejecuta al menos una vez, ya que la condición se evalúa despues de ejecutar el bloque de código
i = 6
do {
    // console.log(`Número en do while: ${i}`)
    i ++
} while(i < 5);

// for of
// Permite recorrer valores de estructuras iterabes de datos y de strings
array = [1, 3, 5, 7, 9]

mySet = new Set(["Felipe", 23, "Mecatrónica", true, "Desarrollador Full Stack"])

myMap = new Map([
    ["name", "felipe"],
    ["email", "correo@correo.com"],
    ["edad", 23],
    ["ciudad", "Bogotá"],
    ["carrera", "Ingeniería"],
    ["celular", "3245612291"]
])

myString = "Hola JavaScript"

for(let value of array){
    console.log(value)
}

for(let value of mySet){
    console.log(value)
}

for(let value of myMap){
    console.log(value)
}

for (let char of myString){
    console.log(char)
}

/* 
Buenas praácticas:
    -Asegurarse de no crear bucles infinitos
    -Usar el continue y break para controlar el flujo del bucle
*/

// continue 
for(let i = 0; i < 10; i++){
    if(i === 4){
        continue  // Salta la iteración cuando i es 4
    }
    console.log(`Sigue el bucle: ${i}`)
}

// break
for(let i = 0; i < 10; i++){
    if(i === 4){
        break  // Termina el bucle cuando i es 4
    }
    console.log(`Sigue el bucle: ${i}`)
}