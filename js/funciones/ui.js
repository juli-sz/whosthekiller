import Categoria from "../models/Categoria.js";
import Jugador from "../models/Jugador.js";

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
}

export const ui = new UI();

// Asigna los métodos de instancia al window para los botones
window.agregarJugadores = () => ui.agregarJugadores();
window.agregarCategorias = () => ui.agregarCategorias();
window.agregarItem = () => ui.agregarItem();
window.editarJuego = () => ui.editarJuego();
window.inicioJuego = () => ui.inicioJuego && ui.inicioJuego();
window.verMarcador = () => ui.verMarcador && ui.verMarcador();
