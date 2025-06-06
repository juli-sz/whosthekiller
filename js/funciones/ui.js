import Categoria from "../models/Categoria.js";
import Jugador from "../models/Jugador.js";

// Importa los modelos necesarios
import { mostrarInformacionSecreta } from './informacionSecreta.js';  
// Importa los modelos necesarios
import { iniciarJuego } from './iniciarJuego.js';

// Importa los modelos necesarios
import { editarJuego } from './editarJuego.js';
// Importa los modelos necesarios
import { agregarJugadores } from './agregarJugadores.js';
// Importa los modelos necesarios
import { agregarCategorias } from './agregarCategorias.js';
// Importa los modelos necesarios
import { agregarItem } from './agregarItem.js';
// Importa los modelos necesarios
import { verMarcador } from './verMarcador.js';

export default class UI {
  constructor() {
    this.jugadores = [];
    this.categorias = [];
    this.informacionSecreta = [];
  }

  agregarJugador(nombre) {
    const jugador = new Jugador(nombre);
    this.jugadores.push(jugador);
    console.log(`Jugador ${nombre} agregado.`);
  }

  agregarJugadores() {
    const nombre = prompt("Ingrese el nombre del jugador:");
    if (nombre) this.agregarJugador(nombre);
  }

  agregarCategoria(nombre) {
    const categoria = new Categoria(nombre);
    this.categorias.push(categoria);
    console.log(`Categoría ${nombre} agregada.`);
  }

  agregarCategorias() {
    const nombre = prompt("Ingrese el nombre de la categoría:");
    if (!nombre) return;
    const nuevaCat = new Categoria(nombre);
    let seguir = true;
    while (seguir) {
      const item = prompt("Ingrese un item (escriba 'exit' para salir):");
      if (item && item.toLowerCase() !== 'exit') {
        nuevaCat.addItem(item);
      } else {
        seguir = false;
      }
    }
    this.categorias.push(nuevaCat);
    alert(`Categoría ${nombre} agregada.`);
  }

  agregarItem() {
    let lista = this.categorias.map(cat => cat.getNombre()).join(', ');
    const nombre = prompt(`¿A qué categoría quiere agregar items? (${lista})`);
    const categoria = this.categorias.find(cat => cat.getNombre() === nombre);
    if (!categoria) return alert("Categoría no encontrada");
    let seguir = true;
    while (seguir) {
      const item = prompt("Ingrese un item (escriba 'exit' para salir):");
      if (item && item.toLowerCase() !== 'exit') {
        categoria.addItem(item);
      } else {
        seguir = false;
      }
    }
  }

  editarJuego() {
    $("#botonJugadores").toggle();
    $("#botonAgregarCategorias").toggle();
    $("#botonAgregarItem").toggle();
  }

  verMarcador() {
    alert("Mostrando marcador (a implementar)");
    // Lógica para mostrar el marcador
  }
  inicioJuego() {
    if (this.jugadores.length < 2 || this.categorias.length < 2) {
      return alert("Debe agregar al menos dos jugadores y dos categorías antes de iniciar el juego.");
    }
    this.jugadores.forEach(j => j.mostrarInformacion());
    this.mostrarInformacionSecreta();
    this.iniciarJuego();
    alert("¡El juego ha comenzado!");
  }
}


let Juego = {
  constructor() {
    this._jugadores = [];
    this._categorias = [];
    this._informacionSecreta = [];
  },

  mezclarItems(items) {
    for (let i = items.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  },

  repartirItems() {
    let i = 0;
    this._categorias.forEach(cat => {
      cat.items.forEach(item => {
        this._jugadores[i].entregarInformacion(item);
        i = (i + 1) % this._jugadores.length;
      });
    });
  }

  // ...otros métodos...
}







export const ui = new UI();

// Asigna los métodos de instancia al window para los botones
window.agregarJugadores = () => ui.agregarJugadores();
window.agregarCategorias = () => ui.agregarCategorias();
window.agregarItem = () => ui.agregarItem();
window.editarJuego = () => ui.editarJuego();
window.inicioJuego = () => ui.inicioJuego && ui.inicioJuego();
window.verMarcador = () => ui.verMarcador && ui.verMarcador();
