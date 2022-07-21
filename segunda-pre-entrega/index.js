// paquetes
const paquetes = [
    { Nombre: "1", Descripción: "Guía, tabla y paddle", Precio: 150 },
    { Nombre: "2", Descripción: "Guía, tabla, paddle y chaleco", Precio: 200 },
    { Nombre: "3", Descripción: "Guía, tabla, paddle, chaleco y cámara", Precio: 300 },
    { Nombre: "4", Descripción: "Guía, tabla, paddle, chaleco, cámara y drone", Precio: 500 },
];





/* // Iniciar sesión
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
    button.onclick = () => {alert ("Bienvenido")} */






let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target

    let cuestionario = []

    // Usando constructor
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let numero = document.getElementById("numero");
    let experiencia = document.getElementById("experiencia");
    let ninos = document.getElementById("ninos");
    let paquete = document.getElementById("paquete");

    function Cliente(nombre, edad, numero, experiencia, ninos, paquete) {
        this.nombre = nombre
        this.edad = edad
        this.numero = numero
        this.experiencia = experiencia
        this.ninos = ninos
        this.paquete = paquete
    };

    const cliente1 = new Cliente(nombre.value, edad.value, numero.value, experiencia.value, ninos.value, paquete.value);
    cuestionario.push(cliente1);
    console.log(cuestionario);

    // Usando funcion de orden superior
    let precioPaquete = paquetes.find(elemento => elemento.Nombre === paquete.value);
    console.log(precioPaquete);
    let precio = 100;
    let result = numero.value * precio + precioPaquete.Precio;

    const totalReserva = () => {
        contenedor.innerHTML = `<div>
                                <p>¡Hola ${nombre.value}!
                                El total de tu reserva es de ${result}.</p>
                            </div>`
    };

    const validarCampos = () => {
        let validacion = (nombre.value == "" || edad.value == "" || numero.value == "" || experiencia.value == "" || ninos.value == "" || paquete.value == "") ? false : true;
        return validacion
    };

    let button = document.getElementById("btnPrincipal")
    button.onclick = () => {
        validarCampos() ? totalReserva() : alert("Debe completar todos los campos");
    };

}