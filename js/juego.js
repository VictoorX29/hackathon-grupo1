'use strict';

/* Todo el JavaScript del juego va aquí.
 * Acordad en el equipo quién programa cada parte (ver EMPIEZA_AQUI.md).
 * Podéis dejarlo en un solo archivo o partirlo en varios si os resulta más fácil con Git.
 */

const divPersonajes = document.querySelector('#personajes');
const divSuelo = document.querySelector('#suelo');
divPersonajes.addEventListener('click', (e) => {
	const clic = e.target;
	const clicId = clic.dataset.id;
	if (
		clicId &&
		personajes[clicId].posicion.y <
			divPersonajes.offsetHeight - divSuelo.offsetHeight
	) {
		if (personajes[clicId].estado === 'cayendo') {
			personajes[clicId].estado = 'paracaidas';
			clic.src = 'img/paracaidas.gif';
		}
	}
});





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



