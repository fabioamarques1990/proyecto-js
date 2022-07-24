// paquetes
const paquetes = [
    { Nombre: "1", Descripción: "Guía, tabla y paddle", Precio: 150 },
    { Nombre: "2", Descripción: "Guía, tabla, paddle y chaleco", Precio: 200 },
    { Nombre: "3", Descripción: "Guía, tabla, paddle, chaleco y cámara", Precio: 300 },
    { Nombre: "4", Descripción: "Guía, tabla, paddle, chaleco, cámara y drone", Precio: 500 },
];

// Usando constructor
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let numero = document.getElementById("numero");
let experiencia = document.getElementById("experiencia");
let ninos = document.getElementById("ninos");
let paquete = document.getElementById("paquete");

const registrarCliente = () => {

    let cuestionario = []

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
    console.log(cliente1);

    localStorage.setItem("cuestionario", JSON.stringify(cuestionario));
};

const totalReserva = () => {

    let precioPaquete = paquetes.find(elemento => elemento.Nombre === paquete.value);
    console.log(precioPaquete);
    let precio = 100;
    let result = numero.value * precio + precioPaquete.Precio;

    localStorage.setItem("result", result);

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
button.onclick = (e) => {
    e.preventDefault();
    validarCampos() ? totalReserva() : swal("¡Debe completar todos los campos!");
    registrarCliente()
};

let misReservas = () => {
    let reservasPasadas = JSON.parse(localStorage.getItem("cuestionario"));
    let resultPasado = localStorage.getItem("result");
    for (const elemento of reservasPasadas) {


        contenedor2.innerHTML = `<div>
                                <p>${elemento.nombre}
                                    ${resultPasado}</p>
                            </div>`

    }
}

let button2 = document.getElementById("btnSecundario")
button2.onclick = () => {
    misReservas()
};