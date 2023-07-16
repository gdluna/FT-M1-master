'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (valor) {
  //si es mayor --> derecha
  if (valor >= this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(valor);
    } else {
      this.right.insert(valor);
    }
  }
  //si es menor --> izquierda
  else {
    if (!this.left) {
      this.left = new BinarySearchTree(valor);
    } else {
      this.left.insert(valor);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  //es una hoja
  if (!this.left && !this.right) return 1;
  //tiene un hijo a la izq
  else if (this.left && !this.right) return 1 + this.left.size();
  //tiene un hijo a la der
  else if (!this.left && this.right) return 1 + this.right.size();
  //tiene ambos hijos
  else {
    return 1 + this.left.size() + this.right.size();
  }
};

BinarySearchTree.prototype.contains = function (valor) {
  //si es el root
  if (valor === this.value) return true;
  else if (valor > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(valor);
    }
  } else {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(valor);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  //in-order: izq - padre - der
  if (order === 'in-order' || !order) {
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    cb(this.value);
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
  }

  //pre-order: padre - izq - der
  else if (order === 'pre-order') {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
  }

  //post-order: izq - der - padre
  else {
    if (this.left) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, order);
    }
    cb(this.value);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arrayAux) {
  if (!arrayAux) var arrayAux = [];

  cb(this.value);

  if (this.left) arrayAux.push(this.left);

  if (this.right) arrayAux.push(this.right);

  var nodo = arrayAux.shift();

  if (nodo) nodo.breadthFirstForEach(cb, arrayAux);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
