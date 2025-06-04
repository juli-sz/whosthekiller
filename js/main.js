import Juego from './models/Juego.js';

import { agregarCategorias, agregarItem, agregarJugadores, editarJuego } from './funciones/ui.js';
import { cargarDatosIniciales, reiniciarDatosIniciales } from './funciones/datosIniciales.js';
import { agregarCategorias, agregarJugadores, agregarItem, editarJuego } from './funciones/ui.js';
export const juegoNuevo = new Juego();
cargarDatosIniciales(juegoNuevo);

function inicioJuego() {
  juegoNuevo.iniciarJuego();
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