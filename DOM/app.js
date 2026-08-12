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
/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));

document.querySelectorAll("a").forEach(el => console.log(el));

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]); // se toma como arreglo.
console.log(document.querySelector("#menu.li"));
console.log(document.querySelectorAll("#menu li"));
*/

//atributos y Data-Atributes, como acceder a los atributos de las etiquetas HTML.

/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-CO");
console.log(document.documentElement.lang);

//esta es como el standard de los programadores al declarar una variable del DOM, con $
const $linkDom = document.querySelector(".link-dom");

$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://youtube.com/jonmircha");
//sirve si tiene ese atributos has
console.log($linkDom.hasAttribute("rel"));
//sirve para remover o eliminar el atributo.
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

//los data atributes.

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description","Modelo de objeto del documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description = "Suscribete al canal y comparte"
console.log($linkDom.dataset.description);
console.log($linkDom.hasAttribute("data-id"));
$linkDom.removeAttribute("data-id");
console.log($linkDom.hasAttribute("data-id"));

*/

//INTERACTUAR CON LOS ESTILOS CSS.

/*
const $linkDom = document.querySelector(".link-dom");
console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
console.log(window.getComputedStyle($linkDom));
console.log(getComputedStyle($linkDom).getPropertyValue("color"));

$linkDom.style.setProperty("text-decoration","none");
$linkDom.style.setProperty("display","block");
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = ".5rem";

console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));

//Variables CSS - Custom Properties CSS

const $html = document.documentElement,
 $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);
*/

/*
const $card = document.querySelector(".card");
console.log($card);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
//esto sirve como palanca, si esta y se le aplica el toggle, retorna falso.
$card.classList.toggle("rotate-45");

$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");
*/

//interactuar con el contenido en html.
const $whatIsDom = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y
    presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;
$whatIsDom.innerText = text;
$whatIsDom.textContent = text;
$whatIsDom.innerHTML = text;
//pone a los parrafos de forma independiente, sin el parrafo con id = "que-es"
$whatIsDom.outerHTML = text;
