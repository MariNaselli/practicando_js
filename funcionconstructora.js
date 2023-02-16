// como hacer objetos de forma mas automatica
// ej si tengo una lista de 30 carros
// una variable por cada carro y objeto por cada carro
//hay una opcion que es la funcion constructora
//genereamos un template de un objeto

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }

};

//aca usamos una variable 
//para poder hacer una funcion consutructora iniciamos con una funcion
// y como parametro laspropiedes de este objeto

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}

//esta es mi funcion constructora teplate de mis nuevos objetos

//si quiero construir el objeto con relacion a este template

var autoNuevo = new auto("Tesla", "Model 3", 2020)

autoNuevo

// new va a generar una nueva instancia
//generar un objeto que deriva de otro objeto

var autoNuevo2 = new auto("Tesla", "Modelo x", 2018)

var autoNuevo3 = new auto ("Toyota", "Corolla", 2020)

//

// generar una funcion constructora con una lista de 30 carros no tan de forma manual 


//funcion que reciba tres parametros y que de forma automatica se vaya agregando a la lista correspondiente
//lista vacia de marca
//lista vacia de modelo
//lista vacia de anio

//no! lista vacia de lista de autos

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }

};


var listaAutos = [];

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}
for (var i=0; i<30; i++){


 var marca = prompt("Ingrese marca");
 var modelo = prompt("Ingrese modelo");
 var annio = prompt("Ingrese año");

 listaAutos.push(new auto(marca, modelo, annio));
console.log(listaAutos[0]);
}




var autos = [];
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for(var i=0; i<30; i++){
    var marca = prompt("Ingrese marca");
    var modelo = prompt("Ingrese modelo");
    var annio = prompt("Ingrese año");
    autos.push(new auto(marca, modelo, annio));
    console.log(autos[];)
}
