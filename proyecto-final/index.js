let clima = document.getElementById("clima");

const getClima = async () => {
    let response = await axios("clima.JSON");
    let data = response.data.DailyForecasts;

    console.log(response);

    data.forEach(element => {
        const item = document.createElement("div");

        item.innerHTML = `<div class="clima">
            <h3> ${element.Date} </h3>
            <p> Minima: ${element.Temperature.Minimum.Value} ${element.Temperature.Minimum.Unit} </p>
            <p> Máxima: ${element.Temperature.Maximum.Value} ${element.Temperature.Maximum.Unit} </p>
            </div>
        `;

        clima.append(item);
    });
}

getClima();

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
let paquete = document.getElementById("paquete");
let fecha = document.getElementById("fecha");

let cuestionario = []

const registrarCliente = () => {

    function Cliente(nombre, edad, numero, paquete, fecha) {
        this.nombre = nombre
        this.edad = edad
        this.numero = numero
        this.paquete = paquete
        this.fecha = fecha
    };

    const cliente1 = new Cliente(nombre.value, edad.value, numero.value, paquete.value, fecha.value);
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

    contenedor.innerHTML += `<div class="reservas">
                                <h3>¡Hola ${nombre.value}!</h3>
                                <p>El total de tu reserva es de $${result}, en el día ${fecha.value}.</p>
                            </div>`
};

const validarCampos = () => {
    let validacion = (nombre.value == "" || edad.value == "" || numero.value == "" || paquete.value == "" || fecha.value == "") ? false : true;
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


        contenedor2.innerHTML = `<div class="reservas_pasadas">
                                <h3>¡Hola ${elemento.nombre}!</h3>
                                <p>Te recordamos que tu reserva es de $${resultPasado},
                                para la fecha: ${elemento.fecha}.
                                Aquí te esperamos.</p>
                            </div>`

    }
}

let button2 = document.getElementById("btnSecundario")
button2.onclick = () => {
    misReservas()
};