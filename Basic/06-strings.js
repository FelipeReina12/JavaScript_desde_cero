// Strings
// Concatenación de cadenas de texto
let myName = "Juan";
let greeting = "Hello," + myName + "!";
let age = 23;

console.log(greeting);
console.log(typeof greeting);

// Obtener la longitud de una cadena de texto
console.log(greeting.length);

// Acceder a caracteres
console.log(greeting[1]);  // Le pasamos el índice del carácter

// Métodos comunes que son una función asociada a un objeto
console.log(greeting.toUpperCase());  // Convertir a mayusculas
console.log(greeting.toLowerCase());  // Convertir a minusculas
console.log(greeting.indexOf("Juan"));  // Busca la posición donde empieza el texto "Juan"
console.log(greeting.includes("Hello"));  // Busca la palabra en el texto
console.log(greeting.slice(0, 5));  // Imprime los caracteres desde el índice 0 hasta el 5 (sin incluir el 5)
console.log(greeting.replace("Hello", "Hola"));  // Busca la palabra Hello y la reemplaza por Hola

// Template literals (plantillas de texto)
// Texto en dos o mas líneas
let message = `Hola, este es mi
curso de JavaScript.
desde cero hasta intermedio.`;
console.log(message);

// Interpolación de variables y expresiones
console.log(`Mi nombre es ${myName} y tengo ${age} años.`);
