//este es un nuevo tipo de dato, ECMAScript 2015, es un array de datos unicos
//son datos sin repetir, se puede convertir un arreglo a un set

//si se repiten en el arreglo, en la consola solo sale una vez
const set = new Set([1,2,3,3,"hola","HOLA", true, false,{},{}]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Recorriendo set");

//recorrer el set

for(item of set) {
    console.log(item);
}

console.log("Recorriendo el set 2");
set2.forEach(item => console.log((item)));


//Aqui es para convertir un set a un Arreglo comun y corriente. IMPORTANTE.
let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);

set.delete("HOla");
console.log(set);

//mirar si ahy un dato en el set, devuelve true o false
console.log(set.has("hola"));
console.log(set.has(19));

//limpiar el set de forma que no quede ningun dato.
set2.clear();
console.log(set2);