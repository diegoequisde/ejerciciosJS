/* 
Queremos hacer una aplicación en JavaScript para gestionar edificios con la información de la situación del edificio y de los propietarios de cada piso. 
Para ello queremos almacenar la siguiente información de cada edificio: calle. número. código postal. plantas del edificio 
(dentro de cada planta tendremos un número de puertas y para cada puerta almacenaremos el nombre del propietario).

Se pide:
    Crear un objeto que nos permita instanciar edificios. Cada vez que instanciemos un edificio le pasaremos la calle, número y código postal como parámetros.  
*/

function Edificio (calle, numero, codigo) {
        this.calle = calle;
        this.numero = numero;
        this.codigo = codigo;
        this.plantas = new Array();
        // this.plantas = [];

    //Cada vez que se crea un edificio que muestre automáticamente un mensaje del estilo:
    // construido nuevo edificio en calle: xxxxxx, nº: xx, CP: xxxxx.
    document.write("Construido nuevo edificio en calle: " + calle + ", nº" + numero + ", CP:" + codigo+"<br/>");

// Se pide además crear los siguientes métodos para el objeto Edificio:
    // modificarNumero(numero) // Se le pasa el nuevo número del edificio para que lo actualice.
    this.modificarNumero = function(numero) {
        this.numero = numero;
    };

    // modificarCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.
    this.modificarCalle = function(calle) {
        this.calle = calle;
    };

    // modificarCodigoPostal(codigo) // Se le pasa el nuevo número de código postal del edificio.
    this.modificarCodigoPostal = function(codigo){
        this.codigo = codigo;    
    };
    // imprimeNumero // Devuelve el número del edificio.
    this.imprimeNumero = function() {
        return this.numero;
    }
    
    // imprimeCodigoPostal // Devuelve el código postal del edificio.
    this.imprimeCodigoPostal = function() {
        return this.codigo;
    }

    // imprimeCalle // Devuelve el nombre de la calle del edificio.
    this.imprimeCalle = function() {
        return this.calle;   
    };

    // agregarPlantasYPuertas(numplantas, puertas) // Se le pasa el número de plantas que queremos crear en el piso y el número de puertas por planta.
    // Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, a las que ya están creadas en el edificio.
    this.agregarPlantasYPuertas = function(numplantas, puertas) {
        let totalPlantas = this.plantas.length;

        if (totalPlantas<=0) inicio = 0;
        else inicio = totalPlantas-1;

        for (let i = inicio; i<totalPlantas+numplantas; i++) {
            this.plantas[i] = new Array(puertas);
            for (let j=0; j<puertas; j++) {
                this.plantas[i][j] = "";
            }
        }
    };

    // imprimePlantas // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.
    this.imprimePlantas = function() {
        document.write("<h2>Listado de propietarios del edificio calle " + this.calle + " número " + this.numero + "</h2>");
    
        for (let i=0; i<this.plantas.length; i++) {
            for (let j=0;j<this.plantas[i].length; j++){
                let propietario = "desconocido";
                
                if(this.plantas[i][j] != "") propietario = this.plantas[i][j];  

                document.write("el propietario de la planta " + (i+1) + " puerta " + (j+1) + " es " + propietario + "<br/>");
            }
        }
    };
    
   // agregarPropietario(nombre,planta,puerta) // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
   // Cada vez que se añada un propietario a un piso de un edificio que muestre un mensaje del estilo:
       // xxxxxxxx es ahora el propietario de la puerta x de la planta x.
    this.agregarPropietario = function(nombre,planta,puerta) {  
        this.plantas[planta-1][puerta-1] = nombre;
        document.write(nombre + " es ahora el propietario de la puerta: " + puerta + " de la planta: " + planta + "<br/>");
    };
};

/*
Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:

    Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
    Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
    Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.

    El código postal del edificio A es: 15706.
    La calle del edificio C es: San Clemente.
    El edificio B está situado en la calle Camino Caneiro número 29.
*/

let edificioA = new Edificio ("García Prieto",58, 15706);
let edificioB = new Edificio ("Camino Caneiro",29, 32004);
let edificioC = new Edificio ("San Clemente","s/n", 15705);

document.write("El código postal del edificio A es: " + edificioA.imprimeCodigoPostal() + "<br/>");
document.write("La calle del edificio C es: " + edificioC.imprimeCalle() + "<br/>");
document.write("El código postal del edificio A es: " + edificioB.imprimeNumero() + "<br/>");


//Agregamos 2 plantas y 3 puertas por planta al edificio A...
edificioA.agregarPlantasYPuertas(2,3);

  /* Agregamos 4 propietarios al edificio A...
    Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.
    Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.
    Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.
    Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2.
*/
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

/* Listado de propietarios del edificio calle García Prieto número 58
    Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
    Propietario del piso 2 de la planta 1: Luisa Martinez.
    Propietario del piso 3 de la planta 1: Marta Castellón.
    Propietario del piso 1 de la planta 2:
    Propietario del piso 2 de la planta 2: Antonio Pereira.
    Propietario del piso 3 de la planta 2:
*/
edificioA.imprimePlantas();

// Agregamos 1 planta más al edificio A...
edificioA.agregarPlantasYPuertas(1,2);

// Agregamos 1 propietario más al edificio A planta 3, puerta 2...
   // Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.
edificioA.agregarPropietario("Pedro Mejide", 3, 2);

/*
Listado de propietarios del edificio calle García Prieto número 58
    Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
    Propietario del piso 2 de la planta 1: Luisa Martinez.
    Propietario del piso 3 de la planta 1: Marta Castellón.
    Propietario del piso 1 de la planta 2:
    Propietario del piso 2 de la planta 2:
    Propietario del piso 1 de la planta 3:
    Propietario del piso 2 de la planta 3: Pedro Meijide.

*/
edificioA.imprimePlantas(); 