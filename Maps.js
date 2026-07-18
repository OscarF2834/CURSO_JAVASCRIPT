//asi se declara un nuevo Map

let mapa = new Map();

//agregando valores.
mapa.set("nombre","Oscar")
mapa.set("apellido","Alvarado")
mapa.set("edad","21")

console.log(mapa)
console.log(mapa.size);
//mirar si una llave esta en el objeto que se acabo de crear
console.log(mapa.has("correo"));
//mirar por dentro que es lo que tiene esa llave por dentro en el objeto:
console.log(mapa.get("nombre"));
//modificar esa propiedad en el objeto, se hace con el set
mapa.set("nombre", "Oscar Alvarado");

mapa.delete("apellido");

//ALGO QUE NO SE RECOMIENDA, PERO SE MUESTRA!!!
mapa.set(19,"diecinueve");
mapa.set(false, "falso");
mapa.set({},{});


console.log(mapa);

//Recorrer un mapa: forof

for (/*Destructuracion ...*/let [key,value] of mapa) {
    console.log(`Llave: ${key} Valor: ${value}`);
}

//OTRA FORMA DE INSTANCIAR UN MAP

const mapa2 = new Map([
    ["nombre", "kenai"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"]
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);

