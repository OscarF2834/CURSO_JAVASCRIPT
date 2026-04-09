/*
1) Programa una función que cuente el número de caracteres de una cadena de 
texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

function contarCaracteres(cadena){
    if(!cadena){
        console.warn("La cadena esta vacia")
    }else{
        console.log(`La cadena tiene ${cadena.length} caracteres`)
    }

    //o se puede hacer asi con el operador ternario:

    (!cadena) ? console.warn("La cadena esta vacia") : console.log(`La cadena tiene ${cadena.length} caracteres`)
}

console.log(contarCaracteres("Hola como estas"));

/*
2) Programa una función que te devuelva el texto recortado según el número de 
caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function textoRecortado(cadena,caracteres){
    return cadena.slice(0,caracteres);
}

console.log(textoRecortado("Hola Mundo", 3));

/*
3) Programa una función que dada una String te devuelva un Array de textos separados 
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/ 

const separarCadena = (cadena,caracter) =>{
    return cadena.split(caracter);
}

console.log(separarCadena("Hola que tal", " "));

function separarTexto(cadena,caracter){
    return cadena.split(caracter);
}

console.log(separarTexto("Hola que tal", " "));

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirTexto = (cadena,veces) => {
    let resultado = cadena.repeat(veces);
    return resultado;
}

console.log(repetirTexto("Hola Mundo ", 3));

/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH".
*/

function invertirTexto(cadena){
    return cadena.split("").reverse().join("");
}

console.log(invertirTexto("Hola Mundo"));

/**
 * 6) Programa una función para contar el número de veces que se repite una palabra en un 
 * texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

function contarVeces(cadena,palabra){
    let palabras = cadena.toLowerCase().split(" ");
    let cantidad = 0;
    for(let i=0; i<palabras.length; i++){
        if(palabras[i] === palabra){
            cantidad++;
        }
    }
    return cantidad;
}

console.log(contarVeces("hola mundo adios mundo hola hola", "hola"));

/**
 * 7) Programa una función que valide si una palabra o frase dada, es un 
 * palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

function palindromo(cadena){
    let cadenaInvertida = cadena.toLowerCase().split("").reverse().join("");
    return (cadena === cadenaInvertida) ? true : false;
}

console.log(palindromo("Salas"));

/**
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto 
 * dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarPatron = (cadena,patron) => {
    return cadena.replace(new RegExp(patron, "ig"),"");
}

console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

/**
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */

const numeroAleatorio = () => {
    return Math.floor(Math.random() * (600 - 501 + 1) + 501);
}

console.log(numeroAleatorio());

/**
 * 10) Programa una función que reciba un número y evalúe si es capicúa 
 * o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */

const capicua = (numero) => {
    if(numero === undefined){
        console.warn("El numero no se inserto")
    }else{
        let capicua = numero.toString().split("").reverse().join("");
        return(numero == capicua) ? console.info("El numero es capicua") : console.info("El numero no es capicua")
    }
}

(capicua(2002));

/**
 * 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
 * o no, pe. miFuncion(7) devolverá true.
 */

const esPrimo = (numero) => {
    if(numero == undefined){
        console.warn("El numero no se ha insertado");
        return;
    }
    if(numero<=1){
        console.log("El numero no es primo");
        return;
    }
    for(let i = 2; i<numero; i++){
            if(numero % i == 0){
                console.info("El numero no es primo");
                return;
            }  
    }
    console.info("El numero es primo");
}

esPrimo(10);

/**
 * 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
 */

const esParImpar = (numero) =>{
    if(numero == undefined){
        console.warn("El numero no se ha insertado");
    }else if(numero % 2 == 0){
        console.info("El numero es par");
    }else{
        console.info("El numero es impar");
    }
}

esParImpar(5);

/**
 * 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

function convertirTemperatura(temperatura){
    return (temperatura * 9/5) + 32;
}

console.log(convertirTemperatura(10));

/**
 * Hacer una funcion que permita calcular el factorial de un numero cualquiera que se de
 */

const factorial = (numero) => {
    let resultado = 1;
    if(numero == undefined){
        console.warn("El numero no se ha insertado");
    }else{
        for(let i = 1; i<=numero; i++){
            resultado *= i;
        }
    }
    return resultado;
}

console.log(factorial(8));

