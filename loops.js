// loops o ciclos
// manera rapida y sencilla de repetir una tarea
// generamos una funcion
//que va hacer una tarea
// mientras se cumpla una condicion 
// o sea veradad
//esa tarea pasa de forma repetida
//hasta que se rompa o deja de ser verdad

var estudiantes = ["Mariana", "Ulises", "Malena", "Ariel"];

function saludarEstudiantes (estudiante) {
    console.log (`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);

}

// sintaxis variable i
// genere variable = a 0
// mientras la variable sea menor a la longitud de mi array estudiante
//el array nos dice cuantos elementos tiene
//entonces i se va a aumentar por un nuemero 
// esa posicion de i es el index

var estudiantes = ["Mariana", "Ulises", "Malena", "Ariel"];

function saludarEstudiantes (estudiante) {
    console.log ("Hola + " estudiante);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);

}

// que hace? var es = 0
// 0 es menor a 4 si
//entonces entra estudiante en la posicion 0 si
// el i++ hace que esa i valga 1 en vez de 0
// trae a ulises
// y asi hasta que sea = o mayor a la longitud
// se rompe el loop y no trae a nadie

// vamos con otra estructura


var estudiantes = ["Mariana", "Ulises", "Malena", "Ariel"];

function saludarEstudiantes (estudiante) {
    console.log (`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// arrays plural mas de una persona
// este parametro es deforma singular
//singular de un grupo
// el estudiante 0 del array estudiantes

// la primera opcion inicializamos una variable de i
// se genera mientras esa variable sea menor a la longitud

// y la otra es for of tenemos quie inicializar una variable en sigular
//en nuestro array de plural

// otra opcion es el while

// primero generar el array y luego la funcion que va hacer esa tarea

var estudiantes = ["Mariana", "Uli", "Male", "Ari"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);

}

// mientras lo que este dentro del parametro
// del while sea verdad
// va a generar ese loop
// shift: cada vez que se cumpla un loop saca el elemento de ese array

