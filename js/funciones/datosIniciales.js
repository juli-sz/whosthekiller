import Categoria from '../clases/Categoria.js';

export function cargarDatosIniciales(juego) {
  juego.agregarJugador("Juli B");
  juego.agregarJugador("Lia");
  juego.agregarJugador("Nati");
  juego.agregarJugador("Nai");
  juego.agregarJugador("Juli S");

  const armas = new Categoria("Armas");
  ["cuchillo", "candelabro", "pistola", "veneno", "trofeo", "cuerda", "bate", "hacha", "pesas"]
    .forEach(item => armas.addItem(item));

  const lugares = new Categoria("Lugares");
  ["vestibulo", "comedor", "cocina", "patio", "observatorio", "teatro", "sala", "spa", "hab de huespedes"]
    .forEach(item => lugares.addItem(item));

  const sospechosos = new Categoria("Sospechosos");
  ["Moradillo", "Blanco", "Mostaza", "Verdi", "Escarlata", "Azulino"]
    .forEach(item => sospechosos.addItem(item));

  juego.categorias.push(armas, lugares, sospechosos);
}
