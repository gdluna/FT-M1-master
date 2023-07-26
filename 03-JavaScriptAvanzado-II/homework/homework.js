"use strict";

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
console.log(otroContador()); // 1
console.log(otroContador()); // 2
console.log(otroContador()); // 3 */

function counter() {
  let contador = 0;
  return function () {
    contador += 1;
    return contador;
  };
}

let nuevoContador = counter();
console.log(nuevoContador());
console.log(nuevoContador());
console.log(nuevoContador());
console.log(nuevoContador());

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
  let objeto = {}; //En este objeto se guardan los cálculos que realiza la función {ARGUMENTO: RESULTADO}
  return function (arg) {
    if (objeto.hasOwnProperty(arg) !== true) {
      //Ejecuto la función y guardo el resultado para la próxima vez que utilice el mismo argumento.
      objeto[arg] = cb(arg);
      /* console.log(arg)
      console.log(cb(arg))
      console.log(cb)
      console.log(objeto) */
      return objeto[arg];
    } else {
      // El argumento no se ha utilizado, con lo cual devuelvo el resultado sin llamar a la función
      return objeto[arg];
    }
  };
}

function square(n) {
  return n * n;
}

/* var funcionCache = cacheFunction(square);
console.log(funcionCache(5));
console.log(funcionCache(10));
console.log(funcionCache(7));
console.log(funcionCache(7));
console.log(funcionCache(11));
console.log(funcionCache(121));  */

/* function cacheFunction(cb) {
  var cache;
  var ar;
  return function(arg) {
    if (arg === ar) {
      return cache;
    }
    cache = cb(arg);
    ar=arg;
    return cache;
  }
}*/

//----------------------------------------

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(this, "_", "_");

console.log(textoAsteriscos("Hola"));
console.log(textoGuiones("Gustavo"));
console.log(textoUnderscore("Urbano"));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
