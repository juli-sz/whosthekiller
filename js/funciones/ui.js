import Categoria from "../models/Categoria.js";
import Jugador from "../models/Jugador.js";

export default class UI {
  constructor(datos) {
    this.datosIniciales = datos;
    this.jugadores = datos.jugadores.map(nombre => new Jugador(nombre));
    this.categorias = datos.categorias.map(catData => {
      const cat = new Categoria(catData.nombre);
      catData.items.forEach(item => cat.addItem(item));
      return cat;
    });
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
    window.alert(`Categoría ${nombre} agregada.`);
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
    window.alert("Mostrando marcador (a implementar)");
    // Lógica para mostrar el marcador
  }
  inicioJuego() {
    // Si no hay jugadores o categorías, recarga los datos iniciales
    if (this.jugadores.length === 0 || this.categorias.length === 0) {
      this.jugadores = this.datosIniciales.jugadores.map(nombre => new Jugador(nombre));
      this.categorias = this.datosIniciales.categorias.map(catData => {
        const cat = new Categoria(catData.nombre);
        catData.items.forEach(item => cat.addItem(item));
        return cat;
      });
      window.alert("No hay jugadores ni categorías. Se han cargado los datos iniciales.");
    }
    if (this.jugadores.length < 2 || this.categorias.length < 2) {
      window.alert("Debe agregar al menos dos jugadores y dos categorías antes de iniciar el juego.");
      return;
    }
    // Simula repartir información secreta (para el test)
    this.informacionSecreta = this.jugadores.map((j, idx) => `Info${idx + 1}`);
    window.alert("¡El juego ha comenzado!");
  }
  mostrarInformacionSecreta() {
    this.informacionSecreta.forEach((info, index) => {
      window.alert(`Información secreta del jugador ${index + 1}: ${info}`);
    });
  }

  reiniciarDatosIniciales() {
    this.jugadores = this.datosIniciales.jugadores.map(nombre => new Jugador(nombre));
    this.categorias = this.datosIniciales.categorias.map(catData => {
      const cat = new Categoria(catData.nombre);
      catData.items.forEach(item => cat.addItem(item));
      return cat;
    });
    this.informacionSecreta = [];
  }

  mezclarItems(items) {
    // Mezcla el array in-place (Fisher-Yates)
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }
} // <-- Solo una llave para cerrar la clase
