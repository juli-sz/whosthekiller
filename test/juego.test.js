import { Juego } from '../js/juego.js';
import { Jugador } from '../js/jugador.js';
import { Categoria } from '../js/categoria.js';

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
    expect(items).not.toEqual(copia); // Podría no fallar, pero da una idea
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
