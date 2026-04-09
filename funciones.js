import { sumar } from "./objetos_js.js";

let a,b;
a = 5;
b = 6;

function suma(x,y){
    return x+y;
}

let resultado = sumar(4,7);
console.log(resultado);

let respuesta = suma(a,b);
console.log(`La respuesta de ${a} + ${b} es igual a: `, respuesta);

let temperatura = 76;

function transformarACelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

const respuesta2 = transformarACelsius(temperatura);

console.log(`La temperatura en grados celsius es de: `, respuesta2);

//FUNCIONES FLECHA:

let num = 20;
let sumarDecena = numero => numero + 12;

const respuesta3 = sumarDecena(parseInt(num));

console.log(respuesta3);