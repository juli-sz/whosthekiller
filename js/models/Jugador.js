export default class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
    this.info = [];
  }

  entregarInformacion(informacion) {
    this.info.push(informacion);
  }

  mostrarInformacion() {
    alert("Acepte para mostrar la información");
    console.log(`Información de ${this.nombre}:`, this.info);
    alert("Avise si ya miró la información");
    console.clear();
  }

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  getInformacion() {
    return this.info;
  }
  setInformacion(informacion) {
    this.info = informacion;
  }
  mezclarInformacion() {
    for (let i = this.info.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.info[i], this.info[j]] = [this.info[j], this.info[i]];
    }
  }
  getInformacionAleatoria() {
    if (this.info.length === 0) return null;
    const index = Math.floor(Math.random() * this.info.length);
    return this.info[index];
  }
  toString() {
    return `Jugador: ${this.nombre}, Información: ${this.info.join(', ')}`;
  }
  getCantidadInformacion() {
    return this.info.length;
  }
  removeInformacion(index) {
    if (index >= 0 && index < this.info.length) {
      this.info.splice(index, 1);
    } else {
      console.error("Índice fuera de rango");
    }
  }
  setInformacionItem(index, item) {
    if (index >= 0 && index < this.info.length) {
      this.info[index] = item;
    } else {
      console.error("Índice fuera de rango");
    }
  }
  getInformacionItem(index) {
    if (index >= 0 && index < this.info.length) {
      return this.info[index];
    } else {
      console.error("Índice fuera de rango");
      return null;
    }
  }
  getCantidadInformacion() {
    return this.info.length;
  }
  getInformacionIndex(index) {
    if (index >= 0 && index < this.info.length) {
      return this.info[index];
    } else {
      console.error("Índice fuera de rango");
      return null;
    }
  }
  setInformacionIndex(index, item) {
    if (index >= 0 && index < this.info.length) {
      this.info[index] = item;
    } else {
      console.error("Índice fuera de rango");
    }
  }
  getInformacionLength() {
    return this.info.length;
  }
  clearInformacion() {
    this.info = [];
  }
  getInformacionCompleta() {
    return this.info.join(', ');
  }
  getInformacionArray() {
    return this.info;
  }
  getInformacionString() {
    return this.info.join(', ');
  }
  getInformacionJSON() {
    return JSON.stringify(this.info);
  }
  getInformacionObjeto() {
    return { nombre: this.nombre, informacion: this.info };
  }
  
}
