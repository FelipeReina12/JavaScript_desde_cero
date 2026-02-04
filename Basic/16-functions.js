//Funciones 
// Es un bloque de código diseñado para realizar una tarea especifica
function myFunc(){
    console.log("Hola función")
}
// Invocar la función
// myFunc()

// Ejecutar la función 5 veces
// for(let i = 0; i <= 5; i++){
//     myFunc()
// }

// Funciones con parámetros
function myFuncWhitParams(name){
    console.log(`Hola ${name}`)
}
// myFuncWhitParams("Felipe")

// Funciones anónimas (Funciones sin nombre definido)
// Estas funciones anónimas se tienen que asignar a una variable
const myfunct2 = function(name){
    console.log(`Hola ${name}`)
}
// myfunct2("Juan")

// Arrow functions (funciones flechas)
// Estas funciones tambien se tienen que almacenar en una variable o en una constante
const myFuncArrow = (name) => {
    console.log(`Hola ${name}`)
}
myFuncArrow("Felipe Reina")

// Una forma más simplificada de escribir la función
const myFuncArrow1 = name2 => console.log(`Bienvendio estudiante: ${name2}`)
myFuncArrow("Juan Felipe Reina")

// Parámetros
function sum(a, b) {
    console.log(a + b)
}
sum(5, 7)

// Default Parameters
function sum1(a = 4, b = 8){
    console.log(a + b)
}
sum1()

// Retorno de valores 
function mult(a, b){
    return a * b  // Podemos retornar ese resultado para guardarlo en una variable o diréctamente imprimirlo por consola
}
let resultado = mult(5, 10)
console.log(resultado)

//Funciones anidadas
function extern(){
    console.log("Función externa")
    function intern(){
        console.log("función interna")
    }
    intern()  // Llamamos la función dentro de la función externa para que funcione
}
extern()

//Curso hasta funciones anidadas
// min: 3:48:33