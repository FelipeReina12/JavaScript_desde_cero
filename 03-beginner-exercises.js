// 1. Escribe un comentario en una línea
// Este es un comentario de una sola línea

// 2. Escribe un comentario en varias líneas
/*
    Este
    Es 
    un 
    comentario
    de
    varias
    líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = "Hola Mundo";
let number = 42;
let boolean = true;
let undefinedVar = undefined;
let nullVar = null;
let symbol = Symbol("Un símbolo único");
let bigInt = BigInt(12345678901234567890);

// 4. Imprime por consola el valor de todas las variables
console.log(string);
console.log(number);
console.log(boolean);
console.log(undefinedVar);
console.log(nullVar);
console.log(symbol);
console.log(bigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof undefinedVar);
console.log(typeof nullVar);
console.log(typeof symbol);
console.log(typeof bigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string = "Chao Planet";
number = 23;
boolean = false;
undefinedVar = undefined;
nullVar = null;
symbol = Symbol("Otro símbolo único");
bigInt = BigInt(98765432109876543210);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = BigInt(98765432109876543210);
number = Symbol("Otro símbolo único");
boolean = null;
undefinedVar = 23;
nullVar = false;
symbol = Symbol("Otro símbolo único");
bigInt = BigInt(98765432109876543210);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const string1 = "Hola Mundo";
const number1 = 42;
const boolean1 = true;
const undefinedVar1 = undefined;
const nullVar1 = null;
const symbol1 = Symbol("Un símbolo único");
const bigInt1 = BigInt(12345678901234567890);

// 9. A continuación, modifica los valores de las constantes
// string1 = "Cfajoa";
// number1 = 35;
// boolean1 = false;
// undefinedVar1 = 25;
// nullVar1 = true;
// symbol1 = Symbol("Un xd");
// bigInt1 = BigInt(12345678901234567890);
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse