/* usando FOR */
/* for (let index = 1; index <= 10; index++) {
    let nombre = prompt ("Ingrese su nombre");

    alert (nombre + " tu turno es: " + index);
}
 */
/* usando WHILE */

let renta = 0;

while(renta < 11) {
    let libros = parseInt(prompt("¿Cuántos libros quieres rentar?"));
    renta += libros;

    alert ("De momento tienes " + renta + " libros rentados.");
}

alert ("¡UPS! No puedes rentar tantos libros.");