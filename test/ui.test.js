import UI from "../js/funciones/ui.js";
import Categoria from "../js/models/Categoria.js";
import Jugador from "../js/models/Jugador.js";

// Ahora sí, tus tests:
describe('UI', () => {
  

  beforeEach(() => {
    let ui = new UI();
  });

  test('puede agregar jugadores', () => {
    ui.agregarJugador('Nati');
    expect(ui.jugadores.length).toBe(1);
    expect(ui.jugadores[0].nombre).toBe('Nati');
  });

  // ...otros tests...
});