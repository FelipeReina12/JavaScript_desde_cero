// if, else if, else
//if
let age = 38
if (age === 37) {
    console.log("La edad es 37")
} else{
    console.log("La edad es mayor que 37")
}

// else if
let score = 85
if (score >= 90) {
    console.log("Sobresaliente")
} else if (score >= 80 && score < 90) {
    console.log("Notable")
} else if (score >= 70 && score < 80) {
    console.log("Bien")
} else if (score >= 60 && score < 70) {
    console.log("Suficiente")
} else if (score < 60) {
    console.log("Insuficiente")
} else {
    console.log("Puntuación no válida")
}

// Operador ternario
// Se usa para operaciones simples de if y else
let numero = 10
const calificacion = numero == 10 ? "Puntaje perfecto" : "Mal puntaje"
console.log(calificacion)

// switch
// alternativa a anidar múltiples if else if
// Comparar una única variable con varios valores posibles
let dia = 8
switch(dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
    default:  // El fefault va al final pero dentro del switch
        console.log("Día no válido")
} 