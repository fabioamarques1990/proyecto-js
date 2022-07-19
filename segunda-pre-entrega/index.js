// paquetes
const paquetes = [
    {Nombre: "1", Descripción: "Guía, tabla y paddle", Precio: 150},
    {Nombre: "2", Descripción: "Guía, tabla, paddle y chaleco", Precio: 200},
    {Nombre: "3", Descripción: "Guía, tabla, paddle, chaleco y cámara", Precio: 300},
    {Nombre: "4", Descripción: "Guía, tabla, paddle, chaleco, cámara y drone", Precio: 500},
];





// Iniciar sesión
let usuario 
let usuarioEnLS = (localStorage.getItem("usuario"));
console.log(usuario);

let button = document.getElementById("btnIngresar")
    button.onclick = () => {alert ("Bienvenido")}

// Recuperar sesión

if (usuarioEnLS) {
    usuario = usuarioEnLS;
    alert ("Bienvenido " + usuario);
} else {
    usuario = document.getElementById ("usuario", usuario.value);
    localStorage.setItem("usuario", usuario);
    let button = document.getElementById("btnIngresar")
    button.onclick = () => {alert ("Bienvenido")}






let formulario = document.getElementById("formulario");
formulario.addEventListener ("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();
    let formulario = e.target

    let cuestionario = []

    // Usando constructor
    let nombre = formulario.children[0].value.toLowerCase();
    let edad = formulario.children[1].value.toLowerCase();
    let numero = formulario.children[2].value.toLowerCase();
    let experiencia = formulario.children[3].value.toLowerCase();
    let ninos = formulario.children[4].value.toLowerCase();
    let paquete = formulario.children[5].value.toLowerCase();

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

let button2 = document.getElementById("btnPrincipal")
button2.onclick = () => {alert ("Listo, tu información está guardada.")}

// Usando ciclo
while (numero > 8) {
    alert ("Lo sentimos, no pueden ser más de 8 personas a la vez.")
    break;
}

// Usando funcion de orden superior
let precioPaquete = paquetes.find(elemento => elemento.Nombre === paquete);
let precio = 100;
let result = numero * precio + precioPaquete.Precio;

alert ("El total de tu reserva es " + result);

}}