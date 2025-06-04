import Juego from '../js/models/Juego.js';
import Jugador from '../js/models/Jugador.js';
import Categoria from '../js/models/Categoria.js';

describe('Juego', () => {
  let juego;

  beforeEach(() => {
    juego = new Juego();
  });

  test('puede agregar jugadores', () => {
    juego.agregarJugador('Nati');
    expect(juego.jugadores.length).toBe(1);
    expect(juego.jugadores[0].nombre).toBe('Nati');
  });

  test('puede agregar categorías', () => {
    juego.agregarCategoria('Sospechosos');
    expect(juego.categorias.length).toBe(1);
    expect(juego.categorias[0].nombre).toBe('Sospechosos');
  });

  test('mezcla los items aleatoriamente', () => {
  const items = ['a', 'b', 'c'];
  const copia = [...items];
  
  juego.mezclarItems(items);

  // Ensure items are shuffled
  let isShuffled = copia.some((item, index) => item !== items[index]);
  expect(isShuffled).toBeTruthy();

  // If not shuffled, try multiple shuffle attempts
  if (!isShuffled) {
    for (let i = 0; i < 5; i++) {
      juego.mezclarItems(items);
      isShuffled = copia.some((item, index) => item !== items[index]);
      if (isShuffled) break;
    }
  }

  expect(isShuffled).toBeTruthy();
});

  test('reparte items equitativamente', () => {
    const j1 = new Jugador('A');
    const j2 = new Jugador('B');
    juego._jugadores.push(j1, j2);

    const cat = new Categoria('C');
    cat.addItem('x');
    cat.addItem('y');
    juego._categorias.push(cat);

    juego.repartirItems();

    expect(j1.info.length + j2.info.length).toBe(2);
  });
});
