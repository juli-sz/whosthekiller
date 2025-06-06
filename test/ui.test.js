import {ui} from "../js/funciones/ui.js";
import Categoria from "../js/models/Categoria.js";
import Jugador from "../js/models/Jugador.js";

// Ahora sí, tus tests:
describe('UI', () => {

  beforeEach(() => {
    ui.jugadores = [];
    ui.categorias = [];
    ui.informacionSecreta = [];
  });

  test('puede agregar jugadores', () => {
    ui.agregarJugador('Nati');
    ui.agregarJugador('Agus');
    expect(ui.jugadores.length).toBe(2);
    expect(ui.jugadores[0].nombre).toBe('Nati');
    expect(ui.jugadores[1].nombre).toBe('Agus');
  });

  // ...otros tests...
});