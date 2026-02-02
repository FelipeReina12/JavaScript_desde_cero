// Tipos de datos en los que se fundamenta nuestra interacción con JavaScript
// String (Cadenas de texto)
let nombre = "Juan Felipe";
let alias = 'Zetawise';
let email = "felipe12.reina@gmail.com";

// Number (Números)
const edad = 23;  // Enteros
const peso = 75.8;  // Decimales

// Boolean (Booleanos)
let esEstudiante = true;
let tieneMascota = false;

// Undefined (Indefinido)
let undefinedVar;  // Variable declarada pero sin valor asignado

// Null (Nulo)
let nullVar = null;  // Variable intencionalmente sin valor

// Symbol (Símbolos)
let sym1 = Symbol("MySymbol");  // Son valores unicos que no se pueden duplicar
console.log(typeof sym1);  // Muestra el tipo de dato 'symbol'

// BigInt (Enteros grandes)
let bigIntVar = BigInt(9007199254741991);  // Números enteros muy grandes
console.log(typeof bigIntVar);  // Muestra el tipo de dato 'bigint'