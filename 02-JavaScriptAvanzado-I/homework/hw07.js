function test() {
  console.log(a); // undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// console.log(a): devuelve "undefined" porque el "var a" se encuentra en el lexical enviroment de la función "test" pero luego de la llamada al console.log
// console.log(foo()) devuelve "2" porque la función "foo" se encuentra en el lexical enviroment de "test" y se toma entera la definición de "foo", al encontrarse en el lexical enviroment de "test"