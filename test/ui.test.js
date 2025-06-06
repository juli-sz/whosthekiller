import {ui} from "../js/funciones/ui.js";
import Categoria from "../js/models/Categoria.js";
import Jugador from "../js/models/Jugador.js";
//import datos from "../js/datos.json" assert { type: "json" };
import datos from "../datos.js"; // Importamos los datos desde un archivo JS


//como no funciona el import de datos.json, lo importamos como un objeto
// const datos = {
//   "jugadores": ["Juli B", "Lia", "Nati", "Nai", "Juli S"],
//   "categorias": [
//     {
//       "nombre": "Armas",
//       "items": ["cuchillo", "candelabro", "pistola", "veneno", "trofeo", "cuerda", "bate", "hacha", "pesas"]
//     },
//     {
//       "nombre": "Lugares",
//       "items": ["vestibulo", "comedor", "cocina", "patio", "observatorio", "teatro", "sala", "spa", "hab de huespedes"]
//     },
//     {
//       "nombre": "Sospechosos",
//       "items": ["Moradillo", "Blanco", "Mostaza", "Verdi", "Escarlata", "Azulino"]
//     }
//   ]
// };










describe('UI', () => {

  beforeEach(() => {
    ui.jugadores = [];
    ui.categorias = [];
    ui.informacionSecreta = [];
  });

  test('puede agregar jugadores', () => {
    console.log('antes del test: '+ui.jugadores);
    ui.agregarJugador('Nati');
    ui.agregarJugador('Agus');
    expect(ui.jugadores.length).toBe(2);
    expect(ui.jugadores[0] instanceof Jugador).toBe(true);
    console.log('después del test: '+ui.jugadores);
    expect(ui.jugadores[0].getNombre()).toBe('Nati'); 
    expect(ui.jugadores[1].getNombre()).toBe('Agus');
    // expect(ui.jugadores[0].nombre).toBe('Nati');
    // expect(ui.jugadores[1].nombre).toBe('Agus');
    console.log(ui.jugadores);
  });

  test('puede agregar categorías', () => {
    console.log('antes del test: '+ui.categorias);
    expect(ui.categorias.length).toBe(datos.categorias.length);
    ui.agregarCategoria('Deportes');
    ui.agregarCategoria('Ciencia');
    expect(ui.categorias.length).toBe(datos.categorias.length+2);
    expect(ui.categorias[0] instanceof Categoria).toBe(true);
    expect(ui.categorias[0].getNombre()).toBe('Deportes');
    expect(ui.categorias[1].getNombre()).toBe('Ciencia');
    console.log('después del test: '+ui.categorias);
  });

  test('puede agregar items a categorías', () => {
    ui.agregarCategoria('Deportes');
    ui.agregarItem();
    expect(ui.categorias[0].getCantidadItems()).toBeGreaterThan(0);
  }); 
test('puede mezclar información de jugadores', () => {
    const jugador = new Jugador('Nati');
    jugador.setInformacion(['Info1', 'Info2', 'Info3']);
    jugador.mezclarInformacion();
    expect(jugador.getCantidadInformacion()).toBe(3);
    expect(jugador.getInformacionAleatoria()).toBeDefined();
  });
test('puede mezclar items de categorías', () => {
    const categoria = new Categoria('Deportes');
    categoria.addItem('Fútbol');
    categoria.addItem('Básquet');
    categoria.addItem('Tenis');
    categoria.mezclarItems();
    expect(categoria.getCantidadItems()).toBe(3);
    expect(categoria.getItemAleatorio()).toBeDefined();
  });
  test('puede reiniciar datos iniciales', () => {
    ui.jugadores = [new Jugador('Nati')];
    ui.categorias = [new Categoria('Deportes')];
    ui.informacionSecreta = [];
    ui.reiniciarDatosIniciales();
  });

  test('puede cargar datos desde JSON', () => {
    expect(ui.jugadores.length).toBe(datos.jugadores.length);
    expect(ui.categorias.length).toBe(datos.categorias.length);
    expect(ui.informacionSecreta.length).toBe(0); // Asumiendo que no hay información secreta en el JSON
  });
  // ...otros tests...
});