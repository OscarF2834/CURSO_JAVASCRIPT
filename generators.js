//esta es una funcion generators.
function* iterable () {
    yield "Hola 1";
    console.log("Hola consola");
    yield "Hola 2";
    console.log("seguimos con mas instrucciones del codigo");
    yield "Hola 3",
    yield "Hola 4";
}

let iterator = iterable();

for(let y of iterator){
    console.log(y)
}

//guardar en un arreglo los yield de una funcion generadora...
const arr = [...iterable()];
console.log(arr);

function cuadrado(valor){
    setTimeout(() => {
        return console.log({valor, resultado: valor * valor});
    },Math.random()*1000);
}

function* generador(){
    console.log("inicia generador");
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    yield cuadrado(0);
    console.log("termina generador");
}

let gen = generador();

for(let y of gen){
    console.log(y);
}