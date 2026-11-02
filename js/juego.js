'use strict';

/* Todo el JavaScript del juego va aquí.
 * Acordad en el equipo quién programa cada parte (ver EMPIEZA_AQUI.md).
 * Podéis dejarlo en un solo archivo o partirlo en varios si os resulta más fácil con Git.
 */

const divPersonajes = document.querySelector('#personajes');
const divSuelo = document.querySelector('#suelo');
const panelInicio = document.querySelector('#panel-inicio');
const iniciar = document.querySelector('#iniciar');
const escenario = document.querySelector('#escenario');
const suelo = document.querySelector('#suelo');
const resultos = document.querySelector('#resueltos');

const personajes = [
	{
		id: 0,
		posicion: { x: 0, y: -80 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje0`),
	},
	{
		id: 1,
		posicion: { x: 0, y: -270 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje1`),
	},
	{
		id: 2,
		posicion: { x: 0, y: -150 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje2`),
	},
	{
		id: 3,
		posicion: { x: 0, y: -300 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje3`),
	},
	{
		id: 4,
		posicion: { x: 0, y: -189 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje4`),
	},
	{
		id: 5,
		posicion: { x: 0, y: -154 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje5`),
	},
	{
		id: 6,
		posicion: { x: 0, y: -239 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje6`),
	},
	{
		id: 6,
		posicion: { x: 0, y: -339 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje6`),
	},
	{
		id: 7,
		posicion: { x: 0, y: -239 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje7`),
	},
	{
		id: 8,
		posicion: { x: 0, y: -139 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje8`),
	},
	{
		id: 9,
		posicion: { x: 0, y: -80 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje9`),
	},
	{
		id: 10,
		posicion: { x: 0, y: -80 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje10`),
	},
	{
		id: 11,
		posicion: { x: 0, y: -80 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje11`),
	},
	{
		id: 12,
		posicion: { x: 0, y: -80 },
		estado: 'cayendo',
		jugador: document.querySelector(`.personaje12`),
	},
];

// VARIABLE VELOCIAD
let velocidad = 1;
let velocidadCaida = 4;

iniciar.addEventListener('click', empezarPartida);

function empezarPartida() {
	panelInicio.style.display = 'none';
	for (let i = 0; i < personajes.length; i++) {
		let posX = Math.floor(Math.random() * escenario.offsetWidth);
		let posY = Math.floor(Math.random() * 200) * -1;
		personajes[i].posicion.x = posX;
		personajes[i].posicion.x = posY;
		escenario.innerHTML += `<img src="img/cayendo.gif" class="personaje personaje${i}" data-id="${i}" style="position: absolute; top:${personajes[i].posicion.y}px ; left: ${posX}px;">`;
	}
	setInterval(() => {
		for (let i = 0; i < personajes.length; i++) {
			if (
				personajes[i].posicion.y <
				escenario.offsetHeight - suelo.offsetHeight - 127
			) {
				personajes[i].posicion.y += 2;
				document.querySelector(`.personaje${i}`).style.top =
					personajes[i].posicion.y + 'px';
			} else {
				if (personajes[i].estado === 'cayendo') {
					personajes[i].estado = 'estrellado';
					personajes[i].jugador.src = 'img/estrellado.gif';
					console.log(personajes[i].jugador);
				} else if (personajes[i].estado == 'paracaidas') {
					personajes[i].estado = 'estrellado';
					personajes[i].jugador.src = 'img/paracaidas.gif';
				}
			}
		}
	}, 20);
}

escenario.addEventListener('click', (e) => {
	const clic = e.target;
	const clicId = clic.dataset.id;
	if (clicId) {
		if (personajes[clicId].estado === 'cayendo') {
			personajes[clicId].estado = 'paracaidas';
			clic.src = 'img/paracaidas.gif';
		}
	}
});
