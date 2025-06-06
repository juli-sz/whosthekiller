
export default class Categoria {
  constructor(nombre) {
    this.nombre = nombre;
    this.items = [];
  }
  
  addItem(nombreItem) {
    this.items.push(nombreItem);
  }

  getItems() {
    return this.items;
  }

  getNombre() {
    return this.nombre;
  }
  getCantidadItems() {
    return this.items.length;
  }
  getItem(index) {
    return this.items[index];
  }
  setItem(index, item) {
    this.items[index] = item;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    } else {
      console.error("Índice fuera de rango");
    }
  }
  mezclarItems() {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }
  }
  getItemAleatorio() {
    if (this.items.length === 0) return null;
    const index = Math.floor(Math.random() * this.items.length);
    return this.items[index];
  }
  toString() {
    return `Categoría: ${this.nombre}, Items: ${this.items.join(', ')}`;
  }

}