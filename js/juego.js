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
//Hay un problema con esta linea
//constante cambiada por conflicto
const velocidad2 = (velMin, velMax)=> Math.floor(Math.random() * velMax) + velMin
//Funcion empezar caida -> recibira el personaje que el sergio enviara
//Recibirá el valor y con eso dictara como caera
function EmpezarCaida(personaje){

     let posX = 0
     setInterval(() =>{ //esto lo hace cada 20 segundos
     posX += dificultades[dificultad]
     const caida = velocidad2 (dificultades) 
     personaje.style.top = posX + "px"
     }, 20);

}

/*HISTORIAL PARTIDAS*/
//declaramos el boton de abrir historial y cerrar historial
let btnPartidas = document.querySelector("#ver-historial")
let btnCerrar = document.querySelector("#cerrar-historial")

//Declaramos el select
let SelectOrden = document.querySelector("#orden-historial")

//Pensaba en hacer un array vacio
const historialjs = [];
const fecha = new Date()
let nombre = "prueba"
let puntos = 1000
let impactos = 10
let dificultadPartida = "facil"

//Y con push ir rellenandolo
historialjs.push({nombre, fecha, puntos, impactos, dificultadPartida})
historialjs.push({nombre: "hola", fecha: new Date(), puntos: 3000, impactos: 20, dificultadPartida: "Facil"})
//pasarlo a json
const historialjson = JSON.stringify(historialjs)
localStorage.setItem("miBD", historialjson)
const recuperacion = localStorage.getItem("miBD")
const BDjson_v2 = JSON.parse(recuperacion)

//Mostrar pestaña
let Historial = document.querySelector("#historial")
btnPartidas.addEventListener("click", function(){
    Historial.classList.add('mostrar')

})

//Cerrar pestaña
btnCerrar.addEventListener("click", function(){
    Historial.classList.remove('mostrar')

})
//Rellenar la tabla de historial
let FilasHistorial = ""
for(let i = 0; i < BDjson_v2.length; i++){
    
    FilasHistorial += `<tr>`
        FilasHistorial += `<td>${BDjson_v2[i].nombre}</td>`
        FilasHistorial += `<td>${BDjson_v2[i].fecha}</td>`
        FilasHistorial += `<td>${BDjson_v2[i].puntos}</td>`
        FilasHistorial += `<td>${BDjson_v2[i].impactos}</td>`
        FilasHistorial += `<td>${BDjson_v2[i].dificultadPartida}</td>`
    FilasHistorial += "</tr>"

}

//Pintarlo en el html
document.querySelector("#filas-historial").innerHTML = FilasHistorial

