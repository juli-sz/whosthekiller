import Juego from './models/Juego.js';
import Categoria from './models/Categoria.js';
import Jugador from './models/Jugador.js';


import { agregarCategorias, agregarItem, agregarJugadores, editarJuego } from './funciones/ui.js';
import { cargarDatosIniciales, reiniciarDatosIniciales } from './funciones/datosIniciales.js';




export const juegoNuevo = new Juego();
cargarDatosIniciales(juegoNuevo);
document.addEventListener('DOMContentLoaded', () => {

function inicioJuego() {
  juegoNuevo.iniciarJuego();
  while (juegoNuevo.jugadores.length < 2 || juegoNuevo.categorias.length < 2) {
    return alert("Debe agregar al menos dos jugadores y dos categorías antes de iniciar el juego.");
  }
  juegoNuevo.jugadores.forEach(j => j.mostrarInformacion());
  juegoNuevo.mostrarInformacionSecreta();
}

function verMarcador() {
  alert("Ganadores anteriores:\n" + juegoNuevo.ganadores.join(", "));
}

$(document).ready(function () {
  $("#botonJugar").click(inicioJuego);
  $("#botonMarcador").click(verMarcador);
  $("#botonEditar").click(editarJuego);
  $("#botonJugadores").click(agregarJugadores);
  $("#botonAgregarCategorias").click(agregarCategorias);
  $("#botonAgregarItem").click(agregarItem);
  $("#botonReiniciar").click(() => reiniciarDatosIniciales(juegoNuevo));
});

  // Todo tu código que usa alert(), prompt(), botones, etc.

  // Ejemplo:
  const btn = document.getElementById('boton-inicio');
  btn.addEventListener('click', () => {
    alert('¡Juego iniciado!');
  });

  // O si pides datos:
  // const nombre = prompt("¿Cómo te llamás?");
  // console.log("Nombre ingresado:", nombre);
});