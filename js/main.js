import Categoria from './models/Categoria.js';
import Jugador from './models/Jugador.js';
import UI from './funciones/ui.js';


import {inicioJuego, mostrarInformacionSecreta, agregarCategorias, agregarJugadores, agregarItem, verMarcador} from './funciones/ui.js';

export function inicioJuego() {
  while (juego.jugadores.length < 2 || juego.categorias.length < 2) {
    return alert("Debe agregar al menos dos jugadores y dos categorías antes de iniciar el juego.");
  }
  juego.jugadores.forEach(j => j.mostrarInformacion());
  mostrarInformacionSecreta();
  juego.iniciarJuego();
  alert("¡El juego ha comenzado!");

  
};

export function iniciarJuego() {
    this._informacionSecreta = [];
    this._categorias.forEach(cat => {
      this.mezclarItems(cat.items);
      const item = cat.items.pop();
      this._informacionSecreta.push(item);
    });
    this.repartirItems();
  };



// function verMarcador() {
//   alert("Ganadores anteriores:\n" + juegoNuevo.ganadores.join(", "));
// };

/* $(document).ready(function () {
  $("#botonJugar").click(inicioJuego);
  $("#botonMarcador").click(verMarcador);
  $("#botonEditar").click(editarJuego);
  $("#botonJugadores").click(agregarJugadores);
  $("#botonAgregarCategorias").click(agregarCategorias);
  $("#botonAgregarItem").click(agregarItem);
  $("#botonReiniciar").click(() => reiniciarDatosIniciales(juegoNuevo));
});
 */


// Asigna las funciones al objeto global window para que funcionen los onclick del HTML
window.inicioJuego = inicioJuego;

export default class Juego {
  constructor() {
    this._jugadores = [];
    this._categorias = [];
    this._informacionSecreta = [];
  };

  mezclarItems(items) {
    for (let i = items.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  };

  repartirItems() {
    let i = 0;
    this._categorias.forEach(cat => {
      cat.items.forEach(item => {
        this._jugadores[i].entregarInformacion(item);
        i = (i + 1) % this._jugadores.length;
      });
    });
  };

  // ...otros métodos...
}


        // Instancia global de UI
        const ui = new UI();

        // Asignar funciones a botones usando jQuery
        $(document).ready(function () {
          $("#botonJugar").click(() => ui.inicioJuego());
          $("#botonMarcador").click(() => ui.verMarcador());
          $("#botonEditar").click(() => ui.editarJuego());
          $("#botonJugadores").click(() => ui.agregarJugadores());
          $("#botonAgregarCategorias").click(() => ui.agregarCategorias());
          $("#botonAgregarItem").click(() => ui.agregarItem());
        });

        // Si necesitas exponer funciones globales para otros scripts:
        window.ui = ui;
    