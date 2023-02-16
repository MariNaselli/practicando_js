


function jugar (jugador_Uno, jugador_Dos) {
    let ganador = "";
    if (jugador_Uno === jugador_Dos)
    {
        ganador = "empate"; 

    } else {
         if(jugador_Uno === "piedra" && jugador_Dos === "tijera"){
            ganador = "Gana jugador 1";
        }
        if(jugador_Uno === "piedra" && jugador_Dos === "papel"){
            ganador = "Gana jugador 2";
        } 
        if(jugador_Uno === "papel" && jugador_Dos === "tijera"){
            ganador = "Gana jugador 2";
        }
        if(jugador_Dos === "papel" && jugador_Uno === "tijera"){
                ganador = "Gana jugador 1";
        }
        if(jugador_Dos === "piedra" && jugador_Uno === "tijera"){
            ganador = "Gana jugador 2";
        }
        if(jugador_Dos === "piedra" && jugador_Uno === "papel"){
            ganador = "Gana jugador 1";
        }
    }
    return ganador;
}

var numero = 1

switch(numero){
    case 1:
        console.log("Soy uno");
        break;
        case 10:
            console.log("Soy un 10");
            break;
            case 100:
                console.log ("Si soy un cien");
                break;
                default:
                    console.log("No soy nada");
}

function jugar (jugador_Uno) {
    
    let jugador_Dos = jugada_automatica();
    console.log("Jugador 1, eligió: " + jugador_Uno);
    console.log("Jugador 2, eligió: " + jugador_Dos);
    let mensaje_ganador = "";
   
    
    if(jugador_Uno === jugador_Dos){
        mensaje_ganador = "empate"
    }else{
        switch(jugador_Uno){
            case "piedra":
                if(jugador_Dos === "papel"){
                    mensaje_ganador = "Gana jugador 2";
                }
                if(jugador_Dos === "tijera"){
                    mensaje_ganador = "Gana jugador 1";
                }
            break;
            case "papel":
                if(jugador_Dos === "piedra"){
                    mensaje_ganador = "Gana jugador 1";
                }
                if(jugador_Dos === "tijera"){
                    mensaje_ganador = "Gana jugador 2";
                }
            break;
            case "tijera":
                if(jugador_Dos === "papel"){
                    mensaje_ganador = "Gana jugador 1";
                }
                if(jugador_Dos === "piedra"){
                    mensaje_ganador = "Gana jugador 2";
                }
            break;
        }
    }
    console.log(mensaje_ganador);
}

function jugada_automatica(){
    let posibles_jugadas = ["piedra", "papel", "tijera"];
    let posicion_aleatoria = getRandomArbitrary(0, 3);
    let jugada = posibles_jugadas[posicion_aleatoria];
    return jugada;
}
function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function contador(){

}

