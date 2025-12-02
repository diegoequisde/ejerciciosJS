/*
Ejercicio 1: Lista de tareas con objetos y funciones

    Crea un array llamado tareas que contenga objetos.
    Cada objeto debe tener las propiedades id (un número), descripcion (un string) y completada (un booleano).
    Crea una función llamada mostrarTareasPendientes que reciba el array de tareas y muestre en la consola las descripciones de las tareas que no están completadas.
    Crea una función llamada marcarComoCompletada que reciba el array de tareas y un id y que marque la tarea correspondiente como completada.
*/

// const contenido = document.getElementById(contenido);

function Tarea(id, descripcion, completada) {
    this.id = id;
    this.descripcion = descripcion;
    this.completada = completada;
}

const tarea1 = new Tarea(1,"tarea numero 1",false);
const tarea2 = new Tarea(2,"tarea numero 2",true);
const tarea3 = new Tarea(3,"tarea numero 3",false);

const arrayTareas = [tarea1, tarea2, tarea3];

const mostrarTareasPendientes = function(arrayTareas){
    console.log("---- Lista de Tareas Pendientes ----");
    for (let i=0; i<arrayTareas.length; i++){
        if(arrayTareas[i].completada === false)
            console.log (arrayTareas[i].descripcion);
    }
};

/* opcion con forEach y filter

const mostrarTareasPendientes = (listaTareas) => {
    console.log("---- Lista de Tareas Pendientes ----");
    
    // Usamos filter para obtener solo las que no están completadas.
    const pendientes = listaTareas.filter(tarea => tarea.completada === false);
    
    // Usamos forEach para iterar y mostrar las descripciones.
    if (pendientes.length === 0) {
        console.log("No tienes tareas pendientes");
    } else {
        pendientes.forEach(tarea => {
            console.log(`- ID ${tarea.id}: ${tarea.descripcion}`);
        });
    }
};
*/

const marcarComoCompletada = function(arrayTareas, idATomar){
    
    // El método find busca la tarea dentro del array que coincida con el id proporcionado;
    const tareaACompletar = arrayTareas.find(tarea => tarea.id === idATomar);
    if(tareaACompletar) {

        if(tareaACompletar.completada) console.log(`La tarea con id: ${idATomar} ya estaba completada`)
        else {
            tareaACompletar.completada = true;
            console.log(`La tarea con id: ${idATomar} se ha completado`)
        }
    }
    else {
        console.log(`No existe la tarea con id ${idATomar}`);
    } 
};

mostrarTareasPendientes(arrayTareas);
marcarComoCompletada(arrayTareas, 2);
marcarComoCompletada(arrayTareas, 1);
marcarComoCompletada(arrayTareas, 3);
mostrarTareasPendientes(arrayTareas);

/*

Ejercicio 2: Inventario de productos con objetos y arrays

    Crea un objeto llamado inventario.
    Las propiedades de este objeto deben ser nombres de productos (ej. "manzanas", "plátanos").
    El valor de cada propiedad debe ser otro objeto con las propiedades cantidad y precio.
    Crea una función llamada obtenerTotalInventario que recorra el objeto inventario (puedes usar Object.entries()) y calcule el valor total de todos los productos 
    (multiplicando la cantidad por el precio de cada uno).
    Crea una función llamada agregarProducto que reciba como argumentos un nombre, una cantidad y un precio, y que añada el nuevo producto al objeto inventario. 
 */

function DatosProducto(cantidad, precio){
    this.cantidad = cantidad;
    this.precio = precio;
};

function Inventario(nombre, DatosProducto){
    this.nombre = nombre;
    this.DatosProducto = DatosProducto;
};

const datosManzanas = new DatosProducto(6, 0.75);
const manzanas = new Inventario("manzanas", datosManzanas);

/* sintaxis literal de objetos

function DatosProducto(cantidad, precio){
    this.cantidad = cantidad;
    this.precio = precio;
};

function Inventario(nombre, DatosProducto){
    this.nombre = nombre;
    this.DatosProducto = DatosProducto;
};

const datosManzanas = new DatosProducto(6, 0.75);
const manzanas = new Inventario("manzanas", datosManzanas);

*/
const Inventario = {
    "manzanas": {
        cantidad: 50,
        precio: 0.75
    },
    "plátanos": {
        cantidad: 100,
        precio: 0.50
    },
    "naranjas": {
        cantidad: 40,
        precio: 0.80
    }
};

const obtenerTotalInventario = function(){

};

const agregarProducto = function(nombre,cantidad,precio) {
    
};

/*

Ejercicio 3: Promedio de calificaciones de estudiantes

    Crea un array llamado estudiantes.
    Cada elemento del array debe ser un objeto con las propiedades nombre y calificaciones (que a su vez será un array de números).
    Crea una función llamada calcularPromedioEstudiante que reciba un objeto de estudiante y devuelva el promedio de sus calificaciones.
    Crea una función llamada mostrarPromedios que reciba el array estudiantes y use la función calcularPromedioEstudiante para mostrar en la consola el nombre del estudiante y su promedio. 
*/

/*

Ejercicio 4: Manipulación de un array con funciones

    Declara un array llamado numeros con al menos 8 números.
    Usa un bucle o un método de array como forEach para recorrer el array.
    Obtén el promedio de los números del array.
    Encuentra el número más grande del array.
    Crea un nuevo array con solo los números pares del array original usando un método de array como filter
*/