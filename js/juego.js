'use strict';

/* Todo el JavaScript del juego va aquí.
 * Acordad en el equipo quién programa cada parte (ver EMPIEZA_AQUI.md).
 * Podéis dejarlo en un solo archivo o partirlo en varios si os resulta más fácil con Git.
 */
const personajes = [{ posicion: { x: 0, y: 0 }, estado: 'cayendo' }];
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
