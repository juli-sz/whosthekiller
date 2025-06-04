Bienvenido a
Who's the killer?
Presione "ayuda" para acceder a las indicaciones del juego
El juego consiste en adivinar quien, como y donde cometió el crimen
Buena Suerte y disfruten el juego!!


# Paso a Paso de Funcionalidades
1. Carga inicial:

Se crean jugadores y categorías base con cargarDatosIniciales.

2. Inicio del juego (inicioJuego):

Se mezcla y selecciona un ítem por categoría como "información secreta".

Se reparten los ítems restantes entre los jugadores.

Cada jugador visualiza su información (alert + console.log).

3. Agregar jugadores, categorías, ítems:

Se hace vía prompt() y se actualiza el estado del juego.

4. Editar juego:

Botones adicionales se ocultan o muestran.

5. Ver marcador:

Muestra una alerta con los ganadores registrados.


# Descripcion de pruebas

¿Qué vamos a testear?
Dado tu código, podemos dividir los tests por clases y funcionalidades:

1. Clase Jugador
Que guarde correctamente el nombre.

Que almacene la información con entregarInformacion.

2. Clase Categoria
Que guarde el nombre.

Que permita agregar items correctamente.

Que retorne los items y el nombre.

3. Clase Juego
Que agregue jugadores y categorías.

Que mezcle correctamente los items.

Que reparta los items equitativamente.

Que genere correctamente la información secreta.