"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n < 0) throw new Error ('n must be positive integer');
  if (n === 0 || n === 1) return n;

  return n * nFactorial(n - 1);
}

/* 
function nFactorialItera(n) {
  var res = 1;
  for (let i = n; i > 0; i--) {
    res = res * i
  }
  return res;
}
*/

function nFibonacci(n) {
  console.log(n);

  if (n === 0 || n === 1) return n;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

//console.log(nFibonacci(8));

/* 
function nFibonacciItera(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  var res = 0;
  var resAnt = 1;
  var resAntAnt = 0;
  for (let i = 2; i < n + 1; i++) {
    res = resAnt + resAntAnt;
    resAntAnt = resAnt;
    resAnt = res;
  }
  return res;
}
*/

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

/* class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(arg) {
    this.arr.unshift(arg);
  }
  dequeue() {
    if (this.arr.length === 0) return undefined;
    else return this.arr.pop();
  }

  size() {
    return this.arr.length;
  }
}

let nuevaCola = new Queue();
console.log(nuevaCola);
nuevaCola.arr = [1,4,8,0,98,54,3.5];
console.log(nuevaCola);
nuevaCola.enqueue('Hola');
console.log(nuevaCola);
nuevaCola.dequeue();
console.log(nuevaCola);
console.log(nuevaCola.size()); */

function Queue() {
  this.arr = [];
}

Queue.prototype.enqueue = function (valor) {
  this.arr.push(valor); //this.arr.unshift(valor);
};

Queue.prototype.dequeue = function () {
  if (this.arr.length === 0) return undefined // -> Esta línea de código no sería necesaria, debido a que el return cuando el array está vacío, entonces devuelve "undefined"
  else return this.arr.shift(); //else return this.arr.pop()
};

Queue.prototype.size = function () {
  return this.arr.length;
};


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
