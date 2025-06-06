import Categoria from './models/Categoria.js';
import Jugador from './models/Jugador.js';
import {ui} from './funciones/ui.js';


import {inicioJuego, mostrarInformacionSecreta, agregarCategorias, agregarJugadores, agregarItem, verMarcador} from './funciones/ui.js';

export function inicioJuego() {
  while (ui.jugadores.length < 2 || ui.categorias.length < 2) {
    return alert("Debe agregar al menos dos jugadores y dos categorías antes de iniciar el juego.");
  }
  ui.jugadores.forEach(j => j.mostrarInformacion());
  mostrarInformacionSecreta();
  ui.iniciarJuego();
  alert("¡El juego ha comenzado!");
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





        // Asignar funciones a botones usando jQuery
        $(document).ready(function () {
          $("#botonJugar").click(() => ui.inicioJuego());
          $("#botonMarcador").click(() => ui.verMarcador());
          $("#botonEditar").click(() => ui.editarJuego());
          $("#botonJugadores").click(() => ui.agregarJugadores());
          $("#botonAgregarCategorias").click(() => ui.agregarCategorias());
          $("#botonAgregarItem").click(() => ui.agregarItem());
        });


    


// Asigna las funciones al objeto global window para que funcionen los onclick del HTML
window.inicioJuego = ui.inicioJuego.bind(ui);
window.verMarcador = ui.verMarcador.bind(ui);
window.editarJuego = ui.editarJuego.bind(ui);
window.agregarJugadores = ui.agregarJugadores.bind(ui);
window.agregarCategorias = ui.agregarCategorias.bind(ui);
window.agregarItem = ui.agregarItem.bind(ui);
