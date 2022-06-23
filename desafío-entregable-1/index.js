// Usando condicional
let dia = prompt ("¿En que día quieres hacer tu reservación?");

if (dia == "lunes") {
    alert ("Lo sentimos, descansamos el lunes.");

} else {
    alert ("Bien, déjanos tus datos.");

// Usando constructor
let array = [];

let nombre = prompt ("¿Cómo te llamas?");
let edad = prompt ("¿Qué edad tienes?");
let numero = prompt ("¿Cuántas personas son en total?");
let experiencia = prompt ("¿Alguien en tu grupo ya practicó stand-up paddle?");
let ninos = prompt ("¿Cuántos niños hay en el grupo?");

function Cliente (nombre, edad, numero, experiencia, ninos) {
    this.nombre = nombre
    this.edad = edad
    this.numero = numero
    this.experiencia = experiencia
    this.ninos = ninos
};

const cliente1 = new Cliente (nombre, edad, numero, experiencia, ninos);
array.push(cliente1);
console.log(array);

// Usando ciclo
while (numero > 8) {
    alert ("Lo sentimos, no pueden ser más de 8 personas a la vez.")
    break;
}

let precio = 500;
let result = numero * precio;

alert ("El total de tu reserva es " + result);

}