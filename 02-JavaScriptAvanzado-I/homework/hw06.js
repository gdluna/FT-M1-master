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

var h = {}[0];
console.log(h); // undefined
console.log(typeof(h)); // undefined

var i = parseInt("09");
console.log(i); // 9
console.log(typeof(i)); // number

var j = 5 && 2;
console.log(j); // 2
console.log(typeof(j)); // number

var k = 2 && 5;
console.log(k); // 5
console.log(typeof(k)); // number

var l = 5 || 0;
console.log(l); // 5
console.log(typeof(l)); // number

var m = 0 || 5;
console.log(m); // true
console.log(typeof(m)); // number

var n = [3]+[3]-[10];
console.log(n); // 23
console.log(typeof(n)); //

var o = 3>2>1;
console.log(o); // false
console.log(typeof(o)); // boolean

var p = [] == ![];
console.log(p); // true
console.log(typeof(p)); // boolean