class Juego {
    constructor() {
      this._jugadores = [];  // Utilizamos _jugadores para evitar conflicto con el getter/setter jugadores
      this._categorias = []; // Utilizamos _categorias para evitar conflicto con el getter/setter categorias
      this._ganadores = [];
      this._informacionSecreta =[];
    }
  
    get jugadores() {
      return this._jugadores;
    }
  
    get categorias() {
      return this._categorias;
    }
  
    get ganadores() {
      return this._ganadores;
    }
  
    agregarJugador(nombre) {
      let jugador = new Jugador(nombre);
      this._jugadores.push(jugador);
    }
  
    agregarCategoria(nombre) {
      let categoria = new Categoria(nombre);
      this._categorias.push(categoria);
    }
  
    agregarGanador(nombre) {
      this._ganadores.push(nombre);
    }

    iniciarJuego() {
      this._informacionSecreta=[];
      this._categorias.forEach(categoria => {
        this.mezclarItems(categoria.items);
        let itemAleatorio = categoria.items.pop();
        this._informacionSecreta.push(itemAleatorio);
      });
  
      this.repartirItems();
    }

    mezclarItems(items) {
      for (let i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
    }
  
    repartirItems() {
      let indiceJugador = 0;
      this._categorias.forEach(categoria => {
        categoria.items.forEach(item => {
          this._jugadores[indiceJugador].entregarInformacion(item);
          indiceJugador = (indiceJugador + 1) % this._jugadores.length;
        });
      });
    }

    mostrarInformacionSecreta() {
      console.log("Información Secreta:", this._informacionSecreta);
    }
    
  }

  
class Jugador {
    constructor(nombre) {
      this.nombre = nombre;
      this.info = []; // Array para almacenar información del jugador
    }
  
    entregarInformacion(informacion) {
      this.info.push(informacion);
    }

    mostrarInformacion() {
      alert('acepte para mostrar informacion');
      console.log(`Informacion de ${this.nombre}:`, this.info);
      alert('avisa si miraste la informacion');
      console.clear();
    }
  }
  
class Categoria {
    constructor(nombre) {
      this.nombre = nombre;
      this.items = []; // Array para almacenar items de la categoría
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
  }
  
  //creo una nueva instancia de juego
  let juegoNuevo = new Juego
  //campos de prueba
  juegoNuevo.agregarJugador("Juli B");
  juegoNuevo.agregarJugador("Lia");
  juegoNuevo.agregarJugador("Nati");
  juegoNuevo.agregarJugador("Nai");
  juegoNuevo.agregarJugador("Juli S");



  let armas = new Categoria("Armas");
  armas.addItem("cuchillo");
  armas.addItem("candelabro");
  armas.addItem("pistola");
  armas.addItem("veneno");
  armas.addItem("trofeo");
  armas.addItem("cuerda");
  armas.addItem("bate");
  armas.addItem("hacha");
  armas.addItem("pesas");

  let lugares = new Categoria("Lugares");
  lugares.addItem("vestibulo");
  lugares.addItem("comedor");
  lugares.addItem("cocina");
  lugares.addItem("patio");
  lugares.addItem("observatorio");
  lugares.addItem("teatro");
  lugares.addItem("sala");
  lugares.addItem("spa");
  lugares.addItem("hab de huespedes");

  let sospechosos = new Categoria("Sospechosos");
  sospechosos.addItem("Moradillo");
  sospechosos.addItem("Blanco");
  sospechosos.addItem("Mostaza");
  sospechosos.addItem("Verdi");
  sospechosos.addItem("Escarlata");
  sospechosos.addItem("Azulino");

  juegoNuevo._categorias.push(armas);
  juegoNuevo._categorias.push(lugares);
  juegoNuevo._categorias.push(sospechosos);

  function inicioJuego(){
    juegoNuevo.iniciarJuego();
    juegoNuevo.jugadores.forEach(jugador => jugador.mostrarInformacion());
    juegoNuevo.mostrarInformacionSecreta();
  }

  function agregarCategorias(){
    let cat = prompt("ingrese el nombre de la categoria")
    let nuevaCat = new Categoria(cat);
    console.log(nuevaCat.nombre)
    let seguirAgregando=true;
    while (seguirAgregando) {
      let itemAgregado=prompt("ingrese item, ingrese exit para salir");
      if (itemAgregado != "exit") {
        nuevaCat.addItem(itemAgregado);
        console.log(`se agrego el item`,itemAgregado);
      } else {
        seguirAgregando=false;
      }
    }
    juegoNuevo._categorias.push(nuevaCat);
  }
  
  function agregarJugadores(){
    let jug = prompt("ingrese el nombre del jugador")
    let nuevoJug = new Jugador(jug);
    console.log(nuevoJug.nombre);
    juegoNuevo._jugadores.push(nuevoJug);
  }

  function agregarItem(){
    juegoNuevo._categorias.forEach(categoria => {console.log(categoria.getNombre(),categoria.getItems())});
    let cambiarCategoria = prompt("a que categoria le quiere agregar items? ")
    console.log(cambiarCategoria);
    let categoriaEncontrada = juegoNuevo._categorias.find(categoria => categoria.getNombre() === cambiarCategoria);
    let seguirAgregando=true;
    while (seguirAgregando) {
      let itemAgregado=prompt("ingrese item, ingrese exit para salir");
      if (itemAgregado != "exit") {
        categoriaEncontrada.addItem(itemAgregado);
        console.log(`se agrego el item`,itemAgregado);
      } else {
        seguirAgregando=false;
      }
    }


  }
  

  //vacio la "Información Confidencial"
  //let informacionConfidencial=[];
  /*
  // opcion 1 let informacionRestante=iniciarJuego.categorias
  //opcion 2
  let todasCategorias = juegoNuevo._categorias;
  let informacionRestante = todasCategorias;
  
  //cargo categorias
  
  
  
  //cargo
  
  inicio();
  
  
  
  
  /*
  while (si) do{
    si=prompt("quiere agregar items?");
    if (si=="SI"||si=="Si"||si=="si"){
      si=true;
      this.item
    }
  }
  */
  /*
  function inicio() {
    print("Bienvenido al Juego");
    let nro_menu = prompt("1. Jugar\n 2. Ver puntuaciones\n3. Ver categorias\n4. ¿Cómo jugar?");
    while ((nro_menu == 0) || (nro_menu > 4)) do {
      print("numero incorrecto, ingrese de vuelta");
      nro_menu = prompt("1. Jugar\n 2. Ver puntuaciones\n3. Ver categorias\n4. ¿Cómo jugar?");
    }
    if (nro_menu==1){
      jugar();
      console.log('seleccionó jugar');
    } else if (nro_menu==2) {
      puntuaciones();
      console.log('seleccionó puntuaciones');
    } else if (nro_menu==3) {
      categorias();
      console.log('selecciono categorias');
    } else {
      help()
      console.log('seleccionó guia de juego');
    }  
  }
  
  function generarInformacionParaJugador(a){
    //para esto tengo que: 
  }
  
  function generarInformacionConfidencial() {
    /*for (const element of iniciarJuego.categorias){
      (iniciarJuego.categorias).forEach(element => {
        informacionRestante.push(element);
        let a = element.nombre;
        let tamCategoria=parseInt((element.items).length);
        let b = getRandomInt(0,tamCategoria);
        informacionConfidencial.push("${a}:${element.items[b]}");
        informacionRestante.$[element].items.pop(b);
      });
      
    } */

      /*
      let itemsElegidos = {};
      categoriasCopia.forEach(categoria => {
        let items = categoria.getItems();
        let randomIndex = Math.floor(Math.random() * items.length);
        let itemElegido = items[randomIndex];
        
        // Guardamos el item elegido y lo eliminamos de la categoría
        itemsElegidos[categoria.getNombre()] = itemElegido;
        categoria.items.splice(randomIndex, 1);
      });
  }
  
  // La función Math.floor() se utiliza para redondear hacia abajo al entero más cercano
  function getRandomInt(min, max) {
    min = Math.ceil(min);   // Redondea hacia arriba al entero más cercano de min
    max = Math.floor(max);  // Redondea hacia abajo al entero más cercano de max
    return Math.floor(Math.random() * (max - min + 1)) + min;  // La fórmula para el número aleatorio
  }
  
  // Ejemplo de uso:
  let numeroAleatorio = getRandomInt(1, 10);  // Genera un número aleatorio entre 1 y 10 (incluidos)
  
  console.log(numeroAleatorio);  // Muestra el número aleatorio generado en la consola
  
  
  function jugar() {
    let ventana=true;
    while (ventana) do {
      let categoriasCopia = juego.categorias.slice();
      generarInformacionConfidencial();
      let cantidadJugadores= parseInt(prompt("cuantos jugadores son?"));
      for (let i=0, i<cantidadJugadores, i++){
        let nombreJugador=prompt("ingrese el nombre del jugador ${this.number}");
        juegoNuevo.agregarJugador(nombreJugador)
        let jugador1 = juego.jugadores[i];
        jugador1.entregarInformacion(informacion);
        console.log(jugador1.info); // Debería mostrar la información entregada por el jugador
      }
    }
  } 
  
  function help() {
    print("Objetivo: intentar descubrir al asesino \nComo Jugar:\nEl juego consiste en realizar preguntas a tus compañeros de manera tal que puedas ir descartando sospechosos, lugares, armas, etc.\nGana el jugador que primero adivine quien, como, donde, etc, cometio el asesinato\n\nPasos para jugar:\n1. Insertar el nombre de todos los jugadores\n2. Presionar el boton para generar la información confidencial\n3. Presionar el boton para distribuir la información descartada entre los jugadores. Para este paso, debera ir jugador por jugador anotando la información que le brindó el sistema de inteligencia. Cabe aclarar que para que no haya trampas, al momento de que sea el turno de un jugador, este tiene que presionar la opcion de _ver informacion_ y una vez terminado de ver debe presionar la opcion de _ocultar informacion_ la cual redirigira al siguiente jugador.\n4. Luego de esto podran iniciar el juego.\n Disfruten el juego!!\n ")
  }
  
  
  */
  
  
  
  
  
  
  
  
  
  
  /*
  // Creación de una instancia de Juego
  let juego = new Juego();
  
  // Agregar jugadores
  juego.agregarJugador('Jugador1');
  juego.agregarJugador('Jugador2');
  
  // Agregar categorías
  juego.agregarCategoria('Categoria1');
  juego.agregarCategoria('Categoria2');
  
  // Acceder a los jugadores y categorías
  console.log(juego.jugadores);  // Debería mostrar los jugadores agregados
  console.log(juego.categorias); // Debería mostrar las categorías agregadas
  
  // Ejemplo de uso de la clase Jugador y Categoria
  let jugador1 = juego.jugadores[0];
  jugador1.entregarInformacion('Información importante para el jugador 1');
  console.log(jugador1.info); // Debería mostrar la información entregada por el jugador
  
  let categoria1 = juego.categorias[0];
  categoria1.addItem('Item1');
  categoria1.addItem('Item2');
  console.log(categoria1.getItems()); // Debería mostrar los items agregados a la categoría
  
  */
