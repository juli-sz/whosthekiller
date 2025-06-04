import Jugador from '../js/models/Jugador.js';

describe('Jugador', () => {
  test('debe crear un jugador con nombre', () => {
    const jugador = new Jugador('Ana');
    expect(jugador.nombre).toBe('Ana');
  });

  test('debe almacenar información', () => {
    const jugador = new Jugador('Ana');
    jugador.entregarInformacion('cuchillo');
    expect(jugador.info).toContain('cuchillo');
  });
});