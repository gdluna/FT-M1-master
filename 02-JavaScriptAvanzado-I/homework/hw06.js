var a = 6 / "3";
console.log(a); // 2
console.log(typeof(a)); // number

var b = "2" * "3";
console.log(b); // 6
console.log(typeof(b)); // number

var c = 4 + 5 + "px";
console.log(c); // 9px
console.log(typeof(c)); // string

var d = "$" + 4 + 5;
console.log(d); // $45
console.log(typeof(d)); // string

var e = "4" - 2;
console.log(e); // 2
console.log(typeof(e)); // number

var f = "4px" - 2;
console.log(f); // NaN
console.log(typeof(f)); // number

var g = 7 / 0;
console.log(g); // Infinity
console.log(typeof(g)); // number

var g = -7 / 0;
console.log(g); // -Infinity
console.log(typeof(g)); // number

var h = {}[0];
console.log(h); // undefined
console.log(typeof(h)); // undefined

var i = parseInt("09");
console.log(i); // 9
console.log(typeof(i)); // number

var i = Number("09");
console.log(i); // 9
console.log(typeof(i)); // number

var j = 5 && 2;
console.log(j); // 2
console.log(typeof(j)); // number
// El resultado es es 2 porque mira el 5 y al ser un número diferente de 0 es true, luego va al 2 y al ser otro número diferente de cero también es true y se queda con éste.

var k = 2 && 5;
console.log(k); // 5
console.log(typeof(k)); // number
// Ídem anterior

var l = 5 || 0; // El color amarillo de Quokka es porque dice que no tuvo que ejecueralo todo, porque al ser 5 un true, entonces ya no mira lo que está luego del OR
console.log(l); // 5
console.log(typeof(l)); // number

var m = 0 || 5;
console.log(m); // true
console.log(typeof(m)); // number

var n = [3]+[3]-[10]; // => '3' + '3' = '33' - [10] => 33 - 10 = 23
console.log(n); // 23
console.log(typeof(n)); //

var o = 3>2>1; // true > 1 = false (Porque convierte el true es 1 con lo cual 1 no es mayor a 1 o lo que es lo mismo 1 > 1 es false)
console.log(o); // false
console.log(typeof(o)); // boolean

var p = [] == ![];
// [] == false (porque con la negación cree que es false)
// [] == 0
// '' == 0
// 0 == 0
console.log(p); // true
console.log(typeof(p)); // boolean