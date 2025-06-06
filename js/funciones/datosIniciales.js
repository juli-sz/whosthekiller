import Categoria from '../clases/Categoria.js';

export function cargarDatosIniciales(juego) {
  // ...definición de Juego, Jugador, Categoria...

fetch('ejemplo.json')
  .then(response => response.json())
  .then(data => {
    // Jugadores
    data.jugadores.forEach(nombre => juegoNuevo.agregarJugador(nombre));

    // Categorías
    data.categorias.forEach(catData => {
      let categoria = new Categoria(catData.nombre);
      catData.items.forEach(item => categoria.addItem(item));
      juegoNuevo._categorias.push(categoria);
    });
  });
}
export function reiniciarDatosIniciales(juego) {
  juego.jugadores = [];
  juego.categorias = [];
  juego.cartasSeleccionadas = [];
  juego.cartasDescartadas = [];
  juego.cartasJugadas = [];
  juego.cartasGanadoras = [];
  juego.turnoActual = 0;
  juego.turnosJugados = 0;
  juego.ganador = null;
}