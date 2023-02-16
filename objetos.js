// que son los objetos
// js diseñado en un paradigma de objetos
// como llevamos un ojeto del mundo fisico a este paradigma de objetos
// auto tiene ciertas propiedades
// variable carro
//le agragamos propiedades
//modelo año de fabricacion llantas cantidad de puertas etc
// replicamos la variable y cambiamospropiedades
// esa es una forma de hacerlo

//sintaxis

//lo primero empezar una variable

var objeto = {};

// esto es un objeto valor y tipo objeto

//como lo generariamos:
//los objetos se manejan con propiedades
// las prop es una combinacion entre palabras claves y valores

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020

};

// me regresa un objeto que son palabra claves con sus valores
// como accedo a algo especifico? aniio o marca etc
// array era corchetes que podiamos ocupar el index el valor numerico
// es con el punto y palabra clave
//miAuto.marca me regresa el valor
//podemos generar que una de las propiedades de este objeto sea una funcion
//y que pueda hacer cosas con otras de las propiedades dentro de ese objeto
//se le llama metodo de objetos
//

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }

};

//miAuto.detalleDelAuto();
//Auto Corolla 2020

//me trae eso: que es el this? 
//es una variable que hace referencia al objeto
//en este caso hace referencia a su padre
//esta es la forma que podemos acceder de igual forma a cierto valores de mi objeto
//el this hace referencia al objeto global que es mi auto
//como puedo empezar a replicar
//como generear 30 objetos de forma mas automatica
// si tengo una lista y quiero pasarlo a objetos

var estudiantes = ["Mariana", "Ulises", "Malena", "Ariel"];

function  (estudiante) {
    console.log ("Hola + " estudiante);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);

}