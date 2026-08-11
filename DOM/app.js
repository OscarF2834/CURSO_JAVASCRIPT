/*console.log("Hola Mundo 😁")
console.log(document);

//INTERACTUANDO CON EL DOM.

console.log("*****************Elementos del Documento******************");
console.log(window.document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.title);
console.log(document.links);
console.log(document.images); //devuelve un html collection un arreglo con los resultados.
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

//escribir algo en el documento. No es recomendable usarlo,, pero esta ahy.
document.write("<h2>Hola mundo</h2>");
*/

//INTERACTUAR CON LOS NODOS, ELEMENTOS Y SELECTORES.
//Con los nodos
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));

document.querySelectorAll("a").forEach(el => console.log(el));
