if (true) {
//tiene que ser verdadero
} else {
    //falso
}
//si no se cumple else..



var edad = 18;

if (edad===18){
    console.log("puedes votar por primera vez");
    } else if (edad>18) {
        console.log("puedes votar de nuevo");
    } else {
        console.log("Aun no puedes votar");
    }

    // hasta 4 else if cuatro validaciones
    //operador if y else en una sola linea

    condition ? true : false;
    // es como un if y else
    // si la condicion es verdad es ver sino false

//ejemplo

var numero = 1;

var resultado = numero ===1 ? "Si soy un uno" : "No soy uno";

//console.log (resultado) me devuelve si soy un uno..


//piedra papel tijera

//juego.. variables funcion y validacion logica 
// variables de piedras papel o tijera calidar cual le gana cual y regresar en tu ganaste y vos perdiste
//luego la funcion 

// variables piedra papel o tijera yo mando o la compu llamar la funcion
// si voy a jugar con piedra o papel o tijera
//generar variables, una funcion con una validacion
//empezar con la validacion
//cual le gana a cual y regresar el tu ganaste o no
//encapsular una funcion
//hacer que mande a llamar con mi parametro


function jugar (jugador_1, jugador_2){
    let ganador = "";
    if (jugador_1 === jugador_2){
        ganador = "empate";
    } else {
        if(jugador_1 === "piedra" && jugador_2 === "tijera"){
            ganador = "Gana jugador 1";
        }
        if(jugador_1 === "piedra" && jugador_2 === "papel"){
            ganador = "Gana jugador 2";
        }
        if(jugador_2 === "piedra" && jugador_1 === "tijera"){
            ganador = "Gana jugador 2";
        }
        if(jugador_2 === "piedra" && jugador_1 === "papel"){
            ganador = "Gana jugador 1";
        }
    }
    return ganador;
}

