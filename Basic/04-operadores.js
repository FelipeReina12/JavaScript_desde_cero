// Operadores

// Operadores Aritmeticos
let a = 6;
let b = 3;
console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo o residuo
console.log(a ** b); // Exponenciación

a ++;  // Incremento
console.log(a);

b --;  // Decremento
console.log(b);

// Operadores de Asignación
let myVar = 2;  // La asignación la hacemos con el símbolo =
console.log(myVar);

myVar += 3;  // Esto lo que hace es sumarle 3 a la variable ya declarada
console.log(myVar);

// Operadores de Comparación
console.log(a);
console.log(a > b);  // Mayor que 
console.log(a < b);  // Menor que 
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que
console.log(a == a); // Igualdad por valor
console.log(a == 7); // Igualdad por valor
console.log(a === a);  // Igualdad por valor y tipo  
console.log(a === "7");  // Igualdad por valor y tipo
console.log(a != 7);  // Diferencia por valor
console.log(a !== "7");  // Diferencia por valor y tipo

console.log(0 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == null)

/*
= Asignación
== Comparación flexible
=== Comparación estricta en valor y tipo
*/

/*
Truthy (Valores verdaderos)
Todos los números positivos y negativos excepto el 0
Cadenas de texto no vacías
los booleans true
*/

/*
Falsy (Valores falsos)
El número 0
0n
null
Undefined
NaN
Los booleans false
Cadenas de texto vacías
*/

// Operadores Lógicos
// and (&&)
console.log(5 > 3 && 2 < 4); 
console.log(5 < 3 && 2 > 4); 
console.log(5 < 3 && 2 < 4); 

// or (||)
console.log(5 > 10 || 2 < 4);
console.log(15 > 10 || 2 < 4);
console.log(15 < 10 || 2 > 4);

// not (!)  Es una negación
console.log(!(5 > 3));

// Operadores ternarios (otra forma de escribir condicionales)
// ? pregunta si es true o false y : se puede clasificar como un else 
const isRaining = true;
isRaining ? console.log("Está lloviendo, lleva un paraguas") : console.log("No está lloviendo, no necesitas paraguas");