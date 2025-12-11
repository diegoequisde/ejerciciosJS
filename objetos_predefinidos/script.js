/*

Realizar una aplicación en JavaScript que realice lo siguiente:

    Abra una nueva ventana no redimensionable.
        Hacer una función y dentro de esa función:
        Escribir en la nueva ventana <h3>Ejemplo de Ventana Nueva</h3>
        URL Completa: XXXXX
        Protocolo utilizado: XXXXX
        Nombre en código del navegador: XXXXX
        Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:
            Java SI disponible en esta ventana, o bien.
            Java NO disponible en esta ventana.
        Que abra un iframe con el contenido de www.google.es y de 800x600.

*/
const botonAbrir = document.getElementById('abrirVentana');

botonAbrir.addEventListener('click', () => {
   
            let nuevaVentana = window.open("", "ventanaEjemplo", "height=300,width=600,resizable=yes");
            const urlActual = window.location.href;
            const protocolo = window.location.protocol;
            const navegador = navigator.appCodeName;

            if (nuevaVentana) {
                nuevaVentana.document.write('<!DOCTYPE html>');
                nuevaVentana.document.write('<html lang="es">');
                nuevaVentana.document.write('<head>');
                nuevaVentana.document.write('<title>Ventana de Ejemplo</title>');
                nuevaVentana.document.write('</head>');
                nuevaVentana.document.write('<body>');
                nuevaVentana.document.write('<h3>Ejemplo de Ventana Nueva</h3>');


                nuevaVentana.document.write(`<p> URL Completa: ${urlActual}</p>`);
                nuevaVentana.document.write(`<p> Protocolo utilizado: ${protocolo}</p>`);
                nuevaVentana.document.write(`<p> Nombre en código del navegador: ${navegador}</p>`);
                if (navigator.javaEnabled()){
                    nuevaVentana.document.write(`<p>Java SI disponible en esta ventana</p>`);
                } else {
                    nuevaVentana.document.write(`<p>Java NO disponible en esta ventana</p>`);
                }
                nuevaVentana.document.write('</body>');
                nuevaVentana.document.write('</html>');

                nuevaVentana.document.close();
            } else {
                alert("Bloqueo de ventana emergente. Por favor, permítelas.");
            }
        });

        function abrirVentanaConIframe() {
        let ventanaIframe = window.open("", "ventanaIframe");
        
       if(ventanaIframe) {
            const iframeHTML = `<iframe src="https://www.google.com" width="800" height="600"></iframe>`;
            ventanaIframe.document.write('<!DOCTYPE html><html><body>');
            ventanaIframe.document.write(iframeHTML);
            ventanaIframe.document.write('</body></html>');
            
            // Cerrar el flujo de escritura
            ventanaIframe.document.close();
        }
        }

/*
Y ahora fuera del código de la función que siga haciendo lo siguiente:

    Que escriba en la ventana principal <h1>TAREA DWEC03</H2><HR />
    Que solicite: introduzca su nombre y apellidos.
    Que solicite: introduzca DIA de nacimiento.
    Que solicite: introduzca MES de nacimiento.
    Que solicite: introduzca AÑO de nacimiento.
    Una vez solicitados esos datos imprimirá en la ventana principal:
        Buenos dias XXXXX
        Tu nombre tiene XX caracteres, incluidos espacios.
        La primera letra A de tu nombre está en la posición: X
        La última letra A de tu nombre está en la posición: X
        Tu nombre menos las 3 primeras letras es: XXXXXXXX
        Tu nombre todo en mayúsculas es: XXXXXXXX
        Tu edad es: XX años.
        Naciste un feliz XXXXXX del año XXXX.
        El coseno de 180 es: XXXXXXXXXX
        El número mayor de (34,67,23,75,35,19) es: XX
        Ejemplo de número al azar: XXXXXXXXXX

Donde aparecen las XXXX tendrá que aparecer el cálculo o texto que corresponda.

*/

document.write("<h1>TAREA DWEC03</H2>");
let nombre = prompt("introduzca su nombre y apellidos");
let dia = prompt("introduzca DIA de nacimiento");
let mes = prompt("introduzca MES de nacimiento");
let anho = prompt("introduzca AÑO de nacimiento");
document.write("Buenos días " + nombre);
document.write("<br/>tu nombre tiene " + nombre.length + " caracteres");

let indiceA = nombre.indexOf('A'); // -1 si no la encuentra
let indicea = nombre.indexOf('a');  

let primera = Math.min(
    indiceA > -1 ? indiceA : Infinity, // Ignora -1 en la comparación de Math.min
    indicea > -1 ? indicea : Infinity 
);

if (primera === Infinity) {
    document.write("<br/>La letra A no se encontró en tu nombre por el principio.");
} else {
    document.write("<br/>La primera letra A de tu nombre está en la posición: " + primera );
}

let ultimaA = nombre.lastIndexOf('A');
let ultimaa = nombre.lastIndexOf('a');

let ultima = Math.max(ultimaA, ultimaa)
if (ultima === -1) {
    document.write("<br/>La letra A no se encontró en tu nombre por el final.");
} else {
    document.write("<br/>La última letra A de tu nombre está en la posición: " + ultima );
}

let nombreCorto = nombre.substring(3,nombre.length);
document.write("<br/>Tu nombre menos las 3 primeras letras es: " + nombreCorto );

let nombreMayus = nombre.toUpperCase();
document.write("<br/>Tu nombre en mayúsculas es: " + nombreMayus );

const fechaActual = new Date();
const anhoActual = fechaActual.getFullYear();        // Devuelve el año completo (e.g., 2025)
const mesActual = fechaActual.getMonth();           // Devuelve el mes (0 para Enero, 11 para Diciembre)
const diaActual = fechaActual.getDate();

let edad = calcularEdad();
document.write("<br/>Tu edad es: " + edad + " años");


function calcularEdad(){
    let edadFinal = anhoActual - anho;

    if (mesActual <= mes && diaActual < dia) edadFinal -= 1;

    return edadFinal;
};

/*
function buscarPrimera(){
    let posicion;

    for (let i =0; i < nombre.length; i++){
        if (nombre[i] == 'a' || nombre[i] == 'A') {
            posicion = i;
            break;
        }
    }
    return posicion;
}

function buscarUltima(){
    let posicion;

    for (let i = nombre.length-1; i >= 0; i--){
        if (nombre[i] == 'a' || nombre[i] == 'A') {
            posicion = i;
        }
        break;
    }
    return posicion;
}

*/

