"use strict";

/* Todo el JavaScript del juego va aquí.
 * Acordad en el equipo quién programa cada parte (ver EMPIEZA_AQUI.md).
 * Podéis dejarlo en un solo archivo o partirlo en varios si os resulta más fácil con Git.
 */
const dificultades = {
    Facil: {
        velMin: 2,
        velMax: 4,
        Aparicion: "3200ms"
    },
    Normal: {
        velMin: 3,
        velMax: 7,
         Aparicion: "3000ms"
    },
    Dificil: {
         velMin: 5,
         velMax: 10,
         Aparicion: "1200ms"
    }
}
const velocidad = (velMin, velMax)=> Math.floor(Math.random() * velMax) + velMin
//Funcion empezar caida -> recibira el personaje que el sergio enviara
//Recibirá el valor y con eso dictara como caera
function EmpezarCaida(personaje){
    //
    let posX = 0
    setInterval(() =>{ //esto lo hace cada 20 segundos
        posX += dificultades[dificultad]
        const caida = velocidad (dificultades) 
        personaje.style.top = posX + "px"
    }, 20);

}

