// paquetes
const paquetes = [
    {Nombre: "1", Descripción: "Guía, tabla y paddle", Precio: 150},
    {Nombre: "2", Descripción: "Guía, tabla, paddle y chaleco", Precio: 200},
    {Nombre: "3", Descripción: "Guía, tabla, paddle, chaleco y cámara", Precio: 300},
    {Nombre: "4", Descripción: "Guía, tabla, paddle, chaleco, cámara y drone", Precio: 500},
];

// Usando condicional
let dia = prompt ("¿En que día quieres hacer tu reservación?");

if (dia == "lunes") {
    alert ("Lo sentimos, descansamos el lunes.");

} else {
    alert ("Bien, déjanos tus datos.");

// Usando constructor
let cuestionario = [];

let nombre = prompt ("¿Cómo te llamas?");
let edad = prompt ("¿Qué edad tienes?");
let numero = prompt ("¿Cuántas personas son en total?");
let experiencia = prompt ("¿Alguien en tu grupo ya practicó stand-up paddle?");
let ninos = prompt ("¿Cuántos niños hay en el grupo?");
let paquete = prompt ("¿Y qué paquete quieres rentar?");

function Cliente (nombre, edad, numero, experiencia, ninos) {
    this.nombre = nombre
    this.edad = edad
    this.numero = numero
    this.experiencia = experiencia
    this.ninos = ninos
    this.paquete = paquete
};

const cliente1 = new Cliente (nombre, edad, numero, experiencia, ninos);
cuestionario.push(cliente1);
console.log(cuestionario);

// Usando ciclo
while (numero > 8) {
    alert ("Lo sentimos, no pueden ser más de 8 personas a la vez.")
    break;
}

let precioPaquete = paquetes.find(elemento => elemento.Nombre === paquete);
let precio = 100;
let result = numero * precio + precioPaquete;

alert ("El total de tu reserva es " + result);

}