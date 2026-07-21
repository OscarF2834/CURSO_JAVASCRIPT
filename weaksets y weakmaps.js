//esto tiene unas carencias con respecto a los sets y maps

// en el set se puede de una pasar los valores cuando se va a instanciar:
const ws = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","HOla"]);

//en el WeakSet Toca hacerlo uno en uno con el Weakset.add...
const WS = new WeakSet();

let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};

WS.add(valor1);
WS.add(valor2);
WS.add(valor3);

//no se puede mirar el tamaño con el .sie, solo se puede imprimir y ver:
console.log(WS);

console.log(WS.has(valor1));
console.log(WS.has(valor2));
console.log(WS.has(valor3));

WS.delete(valor2);

console.log(WS.has(valor1));
console.log(WS.has(valor2));
console.log(WS.has(valor3));

setInterval(() => {
    console.log(WS);
}, 1000);

setTimeout(() => {
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000);

//ahora los weakmap

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1,1);
wm.set(llave2,2);

console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave2));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));