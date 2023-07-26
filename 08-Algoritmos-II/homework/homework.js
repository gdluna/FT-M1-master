"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;
  
  var pivote = array[Math.floor(Math.random() * array.length)];
  
  var left = [];
  var right = [];
  var equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]<pivote) {
      left.push(array[i]);
    } else if (array[i] === pivote) {
      equal.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(right));

}

 // Solución que vimos en la lecture con Dai
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if (array.length < 2) return array;
  const mitad = Math.floor(array.length / 2);
  let left = array.slice(0, mitad);
  let right = array.slice(mitad);

  array = [];

  left = mergeSort(left);
  right = mergeSort(right);

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else array.push(right.shift());
  }
  array = array.concat(left, right);

  return array;
}

// Solución que vimos en el CR con Ale
function mergeSort(array) { 
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if (array.length === 1) return array; // Punto de corte

  var division = split(array); //[[1, 2], [3, 4, 5]]

  var left = division[0]; //[1, 2]
  var right = division[1]; //[3, 4, 5]

  return paste(mergeSort(left), mergeSort(right));
}

//Función que divida el arreglo [1, 2, 3, 4, 5]
function split(array) {

  var middle = Math.floor(array.length / 2);
  
  var left = array.slice(0,middle); //[1, 2]
  
  var right = array.slice(middle); //[3, 4, 5]

  return [left, right]; //[[1, 2], [3, 4, 5]]
}

//Función que una adecuadamente el arreglo
function paste(left, right) {
  var arrayOrdenado = [];

  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arrayOrdenado.push(left[leftIndex]);
      leftIndex++
    } else {
      arrayOrdenado.push(right[rightIndex]);
      rightIndex++
    }
  }
  return arrayOrdenado.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
