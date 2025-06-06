import Jugador from './Jugador.js';
import Juego from './Juego.js';

export default class Categoria {
  constructor(nombre) {
    this.nombre = nombre;
    this.items = [];
  }
  
  addItem(nombreItem) {
    this.items.push(nombreItem);
  }

  getItems() {
    return this.items;
  }

  getNombre() {
    return this.nombre;
  }
}