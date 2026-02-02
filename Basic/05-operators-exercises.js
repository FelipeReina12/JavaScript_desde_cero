// 1. Crea una variable para cada operación aritmética
let suma = 5 + 4;
let resta = 10 -3;
let multiplicacion = 6 * 5;
let division = 30 / 6;
let modulo = 10 % 2;
let exponente = 5 ** 2;
a = 5;
let incremento = ++a ;
console.log(incremento);
let decremento = --a;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = suma;
let asignacionResta = resta;
let asignacionMultiplicacion = multiplicacion;
let asignacionDivision = division;
let asignacionModulo = modulo;
let asignacionExponente = exponente;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 3);
console.log(8 < 13);
console.log(1 == 1);
console.log(5 >= 5 && 6 <= 8);
console.log(7 !== "7");

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(2 < 1 && 3 > 2);
console.log(!(4 == 4));
console.log(10 == null);
console.log(5 === "5");
console.log(6 <= "4");

// 5. Utiliza el operador lógico and
console.log(5 > 4 && 3 < 6);

// 6. Utiliza el operador lógico or
console.log(5 > 4 || 3 < 6);

// 7. Combina ambos operadores lógicos
console.log((5 > 2 && 3 < 6) || (4 == "4"));

// 8. Añade alguna negación
console.log(!(5 > 3 && 4 < 8));

// 9. Utiliza el operador ternario
const edad = 18;
edad ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

// 10. Combina operadores aritméticos, de comparáción y lógicas
let x = 15;
let y = 10;
console.log(!(x + y > 30) && (x - y < 10));