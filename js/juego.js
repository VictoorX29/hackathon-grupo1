"use strict";

/* Todo el JavaScript del juego va aquí.
 * Acordad en el equipo quién programa cada parte (ver EMPIEZA_AQUI.md).
 * Podéis dejarlo en un solo archivo o partirlo en varios si os resulta más fácil con Git.
 */





const panelInicio = document.querySelector("#panel-inicio")
const iniciar = document.querySelector("#iniciar")
const escenario = document.querySelector("#escenario")
const suelo = document.querySelector("#suelo")
const resultos = document.querySelector("#resueltos")


const personajes = [
    {id: 0, posicion: {x: 0, y: -80}, estado: "cayendo", jugador: document.querySelector(`.personaje0`)},
    {id: 1, posicion: {x: 0, y: -80}, estado: "cayendo", jugador: document.querySelector(`.personaje1`)},
    {id: 2, posicion: {x: 0, y: -80}, estado: "cayendo", jugador: document.querySelector(`.personaje2`)},
    {id: 3, posicion: {x: 0, y: -80}, estado: "cayendo", jugador: document.querySelector(`.personaje3`)},
]




// VARIABLE VELOCIAD 
let velocidad = 1
let velocidadCaida = 4




iniciar.addEventListener("click", empezarPartida)

function empezarPartida(){
    panelInicio.style.display = "none"
    for(let i = 0; i<personajes.length; i++){
        let posX = Math.floor(Math.random() * escenario.offsetWidth);
        personajes[i].posicion.x = posX;
        escenario.innerHTML += `<img src="img/cayendo.gif" class="personaje personaje${i}" data-id="${i}" style="position: absolute; top:0px ; left: ${posX}px;">`
    }
    setInterval(() =>{
        for(let i = 0; i < personajes.length; i++){
            if(personajes[i].posicion.y<escenario.offsetHeight - suelo.offsetHeight - 127){
                personajes[i].posicion.y += 2;
                document.querySelector(`.personaje${i}`).style.top = personajes[i].posicion.y + "px"    
            }
                    
        }
    }, 20)
}

function generarPersonajes(){
    
    hola();
}
function hola(){
    
}





