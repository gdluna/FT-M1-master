"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this.lenght = 0; //Opcional, no lo pide el enunciado
  //console.log(this.head);
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  // Método que agrega un nuevo valor
  var nuevoNodo = new Node(value);
  var current = this.head; // Variable que recorre la Queue
  if (!current) {
    // Verifico si la Queue está vacía, si está vacía apunto con el head al nuevoNodo y retorno el valor
    this.head = nuevoNodo;
    this.lenght++; // Incremento en uno la cantidad de nodos de la lista
    return value;
  }
  while (current.next) {
    // Cuando la Queue no está vacía, mientras el current tenga un next, me muevo a él, sale del while cuando el next está en null
    current = current.next;
  }
  current.next = nuevoNodo; // Enlazo el next del current al nuevoNodo
  return value;
};

LinkedList.prototype.remove = function () {
  var current = this.head; // Variable que recorre la Queue
  var currentAnt = null; // Variable que también recorre la Queue pero está un nodo atrás del nodo que apunta current
  if (!current) {
    // Verifico si la Queue está vacía, si está vacía retorno null
    return null;
  }
  if (!current.next) {
    // Verifico si la Queue tiene sólo un nodo, en ese caso apunto el head a null
    this.head = null;
  } else {
    // Si la Queue tiene más de un sólo nodo, recorro la Queue para posisionarme con curretAnt en el penúltimo nodo de la Queue y con current en el siguiente, sale del while cuando el current.next es null
    while (current.next) {
      currentAnt = current;
      current = current.next;
    }

    // Otra forma de moverse es preguntando así con current/current.next/current.next.next
    /*  var current = this.head
        while (current.next.next !== null) {
          current = current.next
        } */

    currentAnt.next = null; // Apunto el next del currentAnt a null con lo cual lo desvinculo del que era el último nodo (current)
  }

  console.log("currentAnt: ", currentAnt);
  console.log("current: ", current);
  console.log("length: ", this.lenght);
  this.lenght--;
  return current.value;
};

LinkedList.prototype.search = function (dato) {
  // Método que busca un dato (dato, puede ser un valor, string o callback)

  var current = this.head; // Con al variable que recorro la Queue apunto al inicio de la misma

  if (!current) {
    // Verifico si la Queue está vacía, si está vacía retorno null
    return null;
  }
  console.log(current.value);
  console.log(dato);

  if (!(typeof dato === "undefined")) {
    // Si el tipo no es "undefined" sigo adelante, sino retorno null
    if (!(typeof dato === "function")) {
      // Si el tipo de dato NO es una función...
      do {
        // Recorro la Queue
        if (current.value === dato) {
          // Verifico si el valor que tiene el nodo apuntado por current es igual al valor buscado
          return dato; // Por el caso verdadero retorno el valor del dato
        }
        current = current.next;
      } while (current); // A la Queue la recorro hasta que current quede apuntanto a null
      return null; // Cuando no encuentra el valor, es decir sale del recorrido sin retornar el dato ni devolverlo, retorno null
    } else {
      // Cuando el tipo de dato SÍ es una función, entro por aquí...
      do {
        // Recorro la Queue
        if (dato(current.value)) {
          // Llamo a la función callback con el dato del nodo.
          return current.value; // en el caso de que el dato sea número par, devuelvo el dato del nodo
        }
        //}
        current = current.next; // Avanzo al siguiente nodo
      } while (current); // A la Queue la recorro hasta que current quede apuntanto a null
      return null; // Si no encuentra valores pares en la Queue retornará null
    }
  } else {
    return null;
  }
};

var nuevaLista = new LinkedList();

nuevaLista.add(5);
nuevaLista.add("two");
nuevaLista.add(17);
nuevaLista.add(122);
console.log(nuevaLista);
nuevaLista.remove();
console.log(nuevaLista);
nuevaLista.add(124);
console.log(nuevaLista);

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  }
  return false;
}

console.log("Encontré el ", nuevaLista.search("two"));
console.log("Encontré el ", nuevaLista.search(isEven));

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable(numBuckets) {
  this.buckets = []; // Nuetra tabla hash, internamente, consta de un arreglo de buckets
  this.numBuckets = 35; // "... La tabla debe tener 35 buckets (numBuckets = 35)... Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada."
}

// ...función hasheadora que determina en qué bucket se almacenará un dato
HashTable.prototype.hash = function (key) {
  let sumaCodigo = 0;
  let moduloSuma = 0;
  for (let i = 0; i < key.length; i++) {
    sumaCodigo += key[i].charCodeAt();
  }
  moduloSuma = sumaCodigo % this.numBuckets;
  return moduloSuma;
};

HashTable.prototype.set = function (clave, valor) {
  if (typeof clave !== "string") throw new TypeError("Keys must be strings");

  let bucket = this.hash(clave); // Llamo a la función hash para hashear la clave y obtener la posición en el array "buckets"

  if (!this.buckets[bucket]) {
    //Si en la posición especificada por "clave" del array "buckets" de la clase no hay nada, el valor allí es "undefined" y su valor de verdad es falso, por lo tanto se puede plantear de esa manera la existencia o no de una "clave" en dicha posición del array "buckets"
    this.buckets[bucket] = {}; // Cuando no hay nada en la posición del array "buckets" le asigno un objeto vacío
  }
  /* console.log(clave);
  console.log(valor);
  console.log(bucket);
  console.log(this.buckets[bucket]); */
  this.buckets[bucket][clave] = valor; // En la posición "bucket" del array "this.buckets", guardo el par clave-valor 
  // console.log(this.buckets[bucket]);
};

HashTable.prototype.get = function (clave) {
  // ...recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla
  var index = this.hash(clave);
  return this.buckets[index][clave];
};

HashTable.prototype.hasKey = function (clave) {
  // ...recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano)
  
  //var info = this.hash(clave)
  //if (info === undefined) return false;
  //return true;

  var index = this.hash(clave);
  return this.buckets[index].hasOwnProperty(clave);
};

var nuevaHT = new HashTable(35);
console.log(nuevaHT);
console.log(nuevaHT.hash("Gustavo"));
nuevaHT.set("Gustavo", 352556);
//nuevaHT.set("Gustavo", 35255);
console.log(nuevaHT);
console.log(nuevaHT.get("Gustavo"));
nuevaHT.set("Hipolito", 1679543);
console.log(nuevaHT);
nuevaHT.set("Hipolito", 16795);
nuevaHT.set("Bruno", 52142786);
console.log(nuevaHT);
nuevaHT.set("key2", "val2");
console.log(nuevaHT);
nuevaHT.set("ofo", "bar2");
console.log(nuevaHT);
console.log(nuevaHT.get("ofo"));
nuevaHT.set("foo", "bar1");
console.log(nuevaHT);
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
