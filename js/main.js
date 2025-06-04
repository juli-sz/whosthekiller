import Juego from './clases/Juego.js';
import { agregarCategorias, agregarItem, agregarJugadores, editarJuego } from './funciones/ui.js';
import { cargarDatosIniciales } from './funciones/datosIniciales.js';

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
});
