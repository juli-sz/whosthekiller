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
}
