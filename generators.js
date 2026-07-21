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