//cdo variables y funciones se procesan antes de eejecutar el codigo

var miNombre;
//declarar una variable

miNombre = "Mari"
//se inicializa una variable

var MiNombre = "Mari"
//declaro la variable y la inicializo

//console.log imprime resultados

//mandamos a llamar primero una variable antes de declarar e inicializar
//eso es hoisting sale undefined
//js le agrefa el varor de underfine en ese momento
//eso hace js en la parte de compilar

//console.log(miNombre):
//mi nombre = "Mari"

//variables y funciones se declaran al inicio del codigo

hey ();

function hey() {
    console.log("Hola " + miNombre);
}

//la inicializo abajo pero la llamo primero
//aparece hola undefined
//las funciones se declaran antes que las variable
//encuentra variable declarada pero la declara undefined
//por buenas practcas tengo que declarar lafuncion al inicio del codigo
//funcion con variables que no estan declaradas