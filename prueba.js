/*
alert("Hola Mundo")
//Ahora, vamos a ver lo que son las variables
//Son espacios en memoria
recipiente = "papel"
alert(recipiente)
string = "Esta es una cadena de caracteres"
number = 20
Boolean = false

//Vamos a ver lo que son las constantes:
const nombre = "Hola, soy oscar"
//Esta siempre permanecera igual en el programa

//Declaracion de la variable
let numero;
numero = 20;
alert(numero);
//le decimos que cadena es una variable inicializada en null
let cadena = null;

//prompt sirve para poder escribir algo en el navegdor, en una barrita.
let Nombre = prompt("digame su nombre");
alert("Hola " + Nombre);

let cantidad = 20;
cantidad += 5;
document.writeln(cantidad)

//Concatenar numeros se hace de la siguiente manera:
numero1 = "59"
numero2 = 4;

frase = numero1.concat(numero2)
document.writeln(frase)
*/

frase = "Oscar Alvarado"
//No se pone con comilla doble, si no con otro tipo de comillas
frase_completa = `Hola ${frase} y estoy estudiando JS`
document.writeln(frase_completa)

//operadores nivel intermedio
let numero1 = 30;
let numero2 = 30;
document.writeln(numero1 == numero2);