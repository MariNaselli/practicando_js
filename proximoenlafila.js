/* En inform. una cola es una estructura de datos abstracta
en la cual los elementos se mantienen en orden.
Los nuevos elementos se pueden añadir al final de la cola y los elementos
previos se retiran del principio de la cola.

Definir una función que tome un arreglo y un numero(elemento)como argumentos
Agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo-
La funcion debe retornar el elemento que fue removido
*/


function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento); //Agregar al final del arreglo
     return arreglo.shift(); // Elimina el primer elemento del arreglo 
    

}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(MiArreglo, 6));

console.log("Después: " + JSON.stringify(MiArreglo));

