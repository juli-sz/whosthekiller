import { juegoNuevo } from '../main.js';

export function agregarCategorias() {
  const nombre = prompt("Ingrese el nombre de la categoría:");
  const nuevaCat = new Categoria(nombre);
  let seguir = true;

  while (seguir) {
    const item = prompt("Ingrese un item (escriba 'exit' para salir):");
    if (item.toLowerCase() !== 'exit') {
      nuevaCat.addItem(item);
    } else {
      seguir = false;
    }
  }

  juegoNuevo.categorias.push(nuevaCat);
}

export function agregarJugadores() {
  const nombre = prompt("Ingrese el nombre del jugador:");
  juegoNuevo.agregarJugador(nombre);
}

export function agregarItem() {
  juegoNuevo.categorias.forEach(cat => console.log(cat.getNombre(), cat.getItems()));
  const nombre = prompt("¿A qué categoría quiere agregar items?");
  const categoria = juegoNuevo.categorias.find(cat => cat.getNombre() === nombre);
  if (!categoria) return alert("Categoría no encontrada");

  let seguir = true;
  while (seguir) {
    const item = prompt("Ingrese un item (escriba 'exit' para salir):");
    if (item.toLowerCase() !== 'exit') {
      categoria.addItem(item);
    } else {
      seguir = false;
    }
  }
}

export function editarJuego() {
  $("#botonJugadores").toggle();
  $("#botonAgregarCategorias").toggle();
  $("#botonAgregarItem").toggle();
}



// Asigna las funciones al objeto global window para que funcionen los onclick del HTML
window.agregarJugadores = agregarJugadores;
window.agregarCategorias = agregarCategorias;
window.agregarItem = agregarItem;

// Si tienes estas funciones, también asígnalas:
window.editarJuego = editarJuego;
window.inicioJuego = inicioJuego;
window.verMarcador = verMarcador;
