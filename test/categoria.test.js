import Categoria from '../js/models/Categoria.js';

describe('Categoria', () => {
  test('debe guardar nombre correctamente', () => {
    const cat = new Categoria('Lugares');
    expect(cat.getNombre()).toBe('Lugares');
  });

  test('debe permitir agregar items', () => {
    const cat = new Categoria('Armas');
    cat.addItem('hacha');
    expect(cat.getItems()).toContain('hacha');
  });
});
