// es un tipo objeto
// es un valor que va a guardar mas valores adentro
// numeros strings objetos o mas arrays adentro de un arrays
// es una forma de generar una estructura de datos
//
// []; estructura de datos, lista de datos
// como se crea uno?

var frutas = ["Manzana", "Banana", "Cereza", "Frutilla"];

console.log (frutas);

// console.log(frutas.length)
//me devuelve 4 (es la longitud)

//como acceder a cada uno de los elementos
//ejemplo solo acceder a un elemento del array
// console.log(frutas [0]);
//me devuelve Manzana 
// asi ingreso a los elementos

//hay dos tipos de elementos que son metodos
// el primermetodo
//mutar el contenido del array
//si quiero agregar o quitar elementos
//eso es mutar: cambiar

var masFrutas = frutas.push("Uva");

//agrega elementos al final de mi array

var ultimo = frutas.pop("Uva")

// pop elimina el ultimo elemento

var nuevaLongitud = frutas.unshift("Uva");


// agrega un nuevo valor pero al inicio

var borraFruta = frutas.shift("Uva");

// borra elemento en la primera pos.


//el ultimo metodo tambien para mutar
// nos va a ayudar a saber la posicion del elemnto
// si no sabemos cual es su pos.

var posicion = frutas.indexOf("Cereza");

posicion

// me devuelve 2

//es la forma de buscar el index de ciertos elementos en el array

// hay otros metodos que nos ayudan a recorrer 
// hay un index que va desde 0 a etc.. 


