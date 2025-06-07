//import '@testing-library/jest-dom';
/* global jest, test, expect, describe, beforeEach */

import UI from "../js/funciones/ui.js";
import Categoria from "../js/models/Categoria.js";
import Jugador from "../js/models/Jugador.js";

const datos = {
  "jugadores": ["Juli B", "Lia", "Nati", "Nai", "Juli S"],
  "categorias": [
    {
      "nombre": "Armas",
      "items": ["cuchillo", "candelabro", "pistola", "veneno", "trofeo", "cuerda", "bate", "hacha", "pesas"]
    },
    {
      "nombre": "Lugares",
      "items": ["vestibulo", "comedor", "cocina", "patio", "observatorio", "teatro", "sala", "spa", "hab de huespedes"]
    },
    {
      "nombre": "Sospechosos",
      "items": ["Moradillo", "Blanco", "Mostaza", "Verdi", "Escarlata", "Azulino"]
    }
  ]
};

describe('UI', () => {
  let ui;
  beforeEach(() => {
    ui = new UI(datos);
  });

  test('puede agregar jugadores', () => {
    ui.agregarJugador('Nati');
    ui.agregarJugador('Agus');
    expect(ui.jugadores.length).toBe(7); // 5 iniciales + 2 agregados
    expect(ui.jugadores[0] instanceof Jugador).toBe(true);
    expect(ui.jugadores[5].getNombre()).toBe('Nati');
    expect(ui.jugadores[6].getNombre()).toBe('Agus');
  });

  test('puede agregar categorías', () => {
    ui.agregarCategoria('Deportes');
    ui.agregarCategoria('Ciencia');
    expect(ui.categorias.length).toBe(datos.categorias.length + 2);
    expect(ui.categorias[ui.categorias.length - 2].getNombre()).toBe('Deportes');
    expect(ui.categorias[ui.categorias.length - 1].getNombre()).toBe('Ciencia');
  });

  test('puede agregar items a categorías', () => {
    ui.agregarCategoria('Deportes');
    ui.categorias[ui.categorias.length - 1].addItem('Fútbol');
    expect(ui.categorias[ui.categorias.length - 1].getCantidadItems()).toBe(1);
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
    expect(ui.jugadores.length).toBe(5);
    expect(ui.categorias.length).toBe(3);
  });

  test('puede cargar datos desde datos', () => {
    expect(ui.jugadores.length).toBe(datos.jugadores.length);
    expect(ui.categorias.length).toBe(datos.categorias.length);
    expect(ui.informacionSecreta.length).toBe(0);
  });
  test('puede iniciar el juego', () => {
    ui.inicioJuego();
    expect(ui.informacionSecreta.length).toBeGreaterThan(0);
  });
  // test('puede mostrar información secreta', () => {
  //   ui.informacionSecreta = ['Info1', 'Info2'];
  //   const spy = jest.spyOn(global, 'alert').mockImplementation(() => {});
  //   ui.mostrarInformacionSecreta();
  //   expect(spy).toHaveBeenCalledWith('Información secreta del jugador 1: Info1');
  //   expect(spy).toHaveBeenCalledWith('Información secreta del jugador 2: Info2');
  //   spy.mockRestore();
  // });
}
);
