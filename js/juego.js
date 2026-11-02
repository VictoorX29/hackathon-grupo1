"use strict";

/* Todo el JavaScript del juego va aquí.
 * Acordad en el equipo quién programa cada parte (ver EMPIEZA_AQUI.md).
 * Podéis dejarlo en un solo archivo o partirlo en varios si os resulta más fácil con Git.
 */




const panelInicio = document.querySelector("#panel-inicio")
const iniciar = document.querySelector("#iniciar")
const escenario = document.querySelector("#escenario")
const resultos = document.querySelector("#resueltos")


const personajes = []




// VARIABLE VELOCIAD 
let velocidad = 1000
let velocidadCaida = 4




iniciar.addEventListener("click", empezarPartida)
function empezarPartida(){
    panelInicio.style.display = "none"
    let personas = 0


    let interval = setInterval(() => {
        personas++
        let posX = Math.floor(Math.random() * escenario.offsetWidth)

        personajes.push({posicion: {x: posX, y: 0}, estado: "cayendo",})
        escenario.innerHTML += `<img src="img/cayendo.gif" class="personaje personaje${personajes}" data-id="${personajes}" style="position: absolute, --x: ${personajes[personas - 1].posicion.x}px; --y: ${personajes[personas - 1].posicion.y}px; left: ${personajes[personas - 1].posicion.x}px;">`
        resultos.textContent = personas
       
        let personaje = document.querySelector(`.personaje${personajes}`)


        if(personas >= 50){
            clearInterval(interval)
        }
    }, velocidad);
}




