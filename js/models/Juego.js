import Jugador from './Jugador.js';
import Categoria from './Categoria.js';

export default class Juego {
  constructor() {
    this._jugadores = [];
    this._categorias = [];
    this._ganadores = [];
    this._informacionSecreta = [];
  }

  get jugadores() { return this._jugadores; }
  get categorias() { return this._categorias; }
  get ganadores() { return this._ganadores; }

  agregarJugador(nombre) {
    const jugador = new Jugador(nombre);
    this._jugadores.push(jugador);
  }

  agregarCategoria(nombre) {
    const categoria = new Categoria(nombre);
    this._categorias.push(categoria);
  }

  agregarGanador(nombre) {
    this._ganadores.push(nombre);
  }

  iniciarJuego() {
    this._informacionSecreta = [];
    this._categorias.forEach(cat => {
      this.mezclarItems(cat.items);
      const item = cat.items.pop();
      this._informacionSecreta.push(item);
    });
    this.repartirItems();
  }

  mezclarItems(items) {
    for (let i = items.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  }

  repartirItems() {
    let i = 0;
    this._categorias.forEach(cat => {
      cat.items.forEach(item => {
        this._jugadores[i].entregarInformacion(item);
        i = (i + 1) % this._jugadores.length;
      });
    });
  }

  mostrarInformacionSecreta() {
    console.log("Información Secreta:", this._informacionSecreta);
  }
}