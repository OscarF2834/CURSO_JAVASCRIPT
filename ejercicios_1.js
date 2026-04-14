/*
1) Programa una función que cuente el número de caracteres de una cadena de 
texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

function contarCaracteres(cadena) {
  if (!cadena) {
    console.warn("La cadena esta vacia");
  } else {
    console.log(`La cadena tiene ${cadena.length} caracteres`);
  }

  //o se puede hacer asi con el operador ternario:

  !cadena
    ? console.warn("La cadena esta vacia")
    : console.log(`La cadena tiene ${cadena.length} caracteres`);
}

console.log(contarCaracteres("Hola como estas"));

/*
2) Programa una función que te devuelva el texto recortado según el número de 
caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function textoRecortado(cadena, caracteres) {
  return cadena.slice(0, caracteres);
}

console.log(textoRecortado("Hola Mundo", 3));

/*
3) Programa una función que dada una String te devuelva un Array de textos separados 
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const separarCadena = (cadena, caracter) => {
  return cadena.split(caracter);
};

console.log(separarCadena("Hola que tal", " "));

function separarTexto(cadena, caracter) {
  return cadena.split(caracter);
}

console.log(separarTexto("Hola que tal", " "));

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirTexto = (cadena, veces) => {
  let resultado = cadena.repeat(veces);
  return resultado;
};

console.log(repetirTexto("Hola Mundo ", 3));

/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH".
*/

function invertirTexto(cadena) {
  return cadena.split("").reverse().join("");
}

console.log(invertirTexto("Hola Mundo"));

/**
 * 6) Programa una función para contar el número de veces que se repite una palabra en un
 * texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

function contarVeces(cadena, palabra) {
  let palabras = cadena.toLowerCase().split(" ");
  let cantidad = 0;
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabra) {
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

function palindromo(cadena) {
  let cadenaInvertida = cadena.toLowerCase().split("").reverse().join("");
  return cadena === cadenaInvertida ? true : false;
}

console.log(palindromo("Salas"));

/**
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto
 * dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

const eliminarPatron = (cadena, patron) => {
  return cadena.replace(new RegExp(patron, "ig"), "");
};

console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

/**
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */

const numeroAleatorio = () => {
  return Math.floor(Math.random() * (600 - 501 + 1) + 501);
};

console.log(numeroAleatorio());

/**
 * 10) Programa una función que reciba un número y evalúe si es capicúa
 * o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */

const capicua = (numero) => {
  if (numero === undefined) {
    console.warn("El numero no se inserto");
  } else {
    let capicua = numero.toString().split("").reverse().join("");
    return numero == capicua
      ? console.info("El numero es capicua")
      : console.info("El numero no es capicua");
  }
};

capicua(2002);

/**
 * 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
 * o no, pe. miFuncion(7) devolverá true.
 */

const esPrimo = (numero) => {
  if (numero == undefined) {
    console.warn("El numero no se ha insertado");
    return;
  }
  if (numero <= 1) {
    console.log("El numero no es primo");
    return;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      console.info("El numero no es primo");
      return;
    }
  }
  console.info("El numero es primo");
};

esPrimo(10);

/**
 * 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
 */

const esParImpar = (numero) => {
  if (numero == undefined) {
    console.warn("El numero no se ha insertado");
  } else if (numero % 2 == 0) {
    console.info("El numero es par");
  } else {
    console.info("El numero es impar");
  }
};

esParImpar(5);

/**
 * 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
 */

function convertirTemperatura(temperatura) {
  return (temperatura * 9) / 5 + 32;
}

console.log(convertirTemperatura(10));

/**
 * Hacer una funcion que permita calcular el factorial de un numero cualquiera que se de
 */

const factorial = (numero) => {
  let resultado = 1;
  if (numero == undefined) {
    console.warn("El numero no se ha insertado");
  } else {
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
  }
  return resultado;
};

console.log(factorial(8));

/**
 * 15) Programa una función para convertir números de base binaria a
 * decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
 */

/*console.log("Ejercicio 15 convertidor de binario a decimal y viceversa");

const convertirBase = (numero, base) => {
  let resultado = 0;
  if (base == 2) {
    let binario = numero.toString();
    for (let i = 0; i < binario.length; i++) {
        let bit = Number(binario[i]);
        if (bit !== 0 && bit !== 1) {
          console.warn("El numero binario es invalido");
          return;
        }
        let posicion = binario.length - 1 - i;
        resultado += bit * Math.pow(2, posicion);
    }
  }else if(base == 10){
    let decimal = numero.toString();
    for(let i=0; i< decimal.length; i++){
        let digito = Number(decimal[i]);
        let posicion = decimal.length - 1 - i;
        resultado += digito * Math.pow(10, posicion);
    }
  } 
  return resultado;
};

convertirBase(100, 2); */

/**
 * 16) Programa una función que devuelva el monto final después de aplicar un
 * descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 */

const aplicarDescuento = (precio, descuento) => {
  let resultado = precio - precio * (descuento / 100);
  console.log(
    `El resultado del ${descuento}% de descuento del ${precio} es de: ${resultado}`,
  );
};

aplicarDescuento(1000, 20);

/**
 * 17) Programa una función que dada una fecha válida determine cuantos años han pasado
 * hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

/*const calcularEdad = (fecha) => {
    const fecha = new Date();
    let edad = fecha.getFullYear() - fecha.getFullYear();
    return edad;  
}

console.log(calcularEdad(new Date(1984,4,23)));*/

/**
 * 18) Programa una función que dada una cadena de texto cuente el número de vocales
 * y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */

console.info(
  "Ejercicio 18 - contar vocales y consonantes de una cadena de texto",
);

const contarVocalesConsonantes = (cadena = undefined) => {
  let vocales = 0;
  let consonantes = 0;
  if (cadena == undefined) {
    console.warn("La cadena no se ha insertado");
  } else {
    for (let i = 0; i < cadena.length; i++) {
      if (
        cadena[i] == "a" ||
        cadena[i] == "e" ||
        cadena[i] == "i" ||
        cadena[i] == "o" ||
        cadena[i] == "u"
      ) {
        vocales++;
      } else {
        consonantes++;
      }
    }
  }
  console.info(`Vocales: ${vocales}, Consonantes: ${consonantes}`);
};

contarVocalesConsonantes("Hola Mundo");

/**
 * 19) Programa una función que valide que un texto sea un nombre
 * válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */

console.info("Ejercicio 19 - validar nombre");

const validarNombre = (nombre) => {
  if (nombre == undefined) {
    console.warn("El nombre no se ha insertado");
  } else {
    let condicion = new RegExp("^[a-zA-Z]+");
    let resultado = condicion.test(nombre);
    console.info(`El siguiente nombre ${nombre} es valido: ${resultado}`);
  }
};

validarNombre("Oscar Alvarado");

/**
 * 21) Programa una función que dado un array numérico devuelve otro array con los
 * números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */

console.info("Ejercicio 21 - elevar numeros al cuadrado dentro de un arreglo");

const elevarAlCuadrado = (arreglo = []) => {
  if (arreglo == [""]) {
    return "El arreglo no se ha insertado";
  } else {
    for (let i = 0; i < arreglo.length; i++) {
      arreglo[i] = Math.pow(arreglo[i], 2);
    }
  }
  return arreglo;
};
console.log(elevarAlCuadrado([]));

/**
 * 22) Programa una función que dado un array devuelva el número mas alto y el
 * más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 */

console.info(
  "Ejercicio 22 - Determinar el valor minimo ya maximo de un arreglo",
);

function valorMinimoMaximo(arreglo = []) {
  let numeroMayor = 0;
  let numeroMenor = 0;
  if (arreglo == []) {
    return "No se ha insertado nigun elemento en el arreglo";
  } else {
    let ordenado = arreglo.sort((a, b) => b - a);
    for (let i = 0; i < ordenado.length; i++) {
      if (i == 0) {
        numeroMayor = ordenado[i];
      } else if (ordenado[i] == ordenado[ordenado.length - 1]) {
        numeroMenor = ordenado[i];
      }
    }
  }
  console.log("El numero mayor es: " + numeroMayor);
  console.log("El numero menor es: " + numeroMenor);
}

valorMinimoMaximo([1, 4, 5, 100, -70]);

/**
 * 23) Programa una función que dado un array de números devuelva un objeto con
 * 2 arreglos en el primero almacena los números pares y en el segundo los impares,
 * pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

console.info(
  "Ejercicio 23 - convertir un arreglo en un objeto con pares e impares",
);

const paresImpares = (arreglo = []) => {
  let pares = [];
  let impares = [];
  if (arreglo.length == 0) {
    console.warn("El arreglo no se ha insertado");
  }
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      pares.push(arreglo[i]);
    } else {
      impares.push(arreglo[i]);
    }
  }
  return { pares, impares };
};

console.log(paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/**
 * 24) Programa una función que dado un arreglo de números devuelva un objeto con
 * dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el
 * segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

console.info(
  "Ejercicio 24 - Devolver objeto con dos arreglos, uno ascendente y el otro descendente",
);

const objetoAscendenteDescendente = (arreglo = []) => {
  if (!Array.isArray(arreglo) || arreglo.length === 0) {
    console.warn(
      "Lo insertado no es un arreglo o no se insertaron datos en la estructura",
    );
    return;
  }

  const ascendente = [...arreglo].sort((a, b) => a - b);
  const descendente = [...arreglo].sort((a, b) => b - a);

  return { ascendente, descendente };
};

console.log(objetoAscendenteDescendente([7, 5, 7, 8, 6]));

/**
 * 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 * pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 */

console.info("Ejercicio 25 - Eliminar duplicados de un arreglo");

const eliminarDuplicados = (arreglo = []) => {
  let resultado = [];
  resultado = [...new Set(arreglo)];
  return resultado;
};

console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]));

/**
 * 26) Programa una función que dado un arreglo de números obtenga el promedio,
 * pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

const promedioArreglo = (arreglo = []) => {
  let suma = 0;
    promedio = 0;

  if (!Array.isArray(arreglo) || arreglo.length === 0) {
    console.warn("El arreglo no es de numeros o no se ha insertado");
    return;
  } 

  for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
  }

  promedio = suma / arreglo.length;
  return promedio;
};

console.log(promedioArreglo([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

/**
 * 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película 
en IMDB, titulo, director, 
año de estreno, país o países de origen, géneros y calificación en IMBD.

    Todos los datos del objeto son obligatorios.
    Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 

     7 restantes números.

    Valida que el título no rebase los 100 caracteres.
    Valida que el director no rebase los 50 caracteres.
    Valida que el año de estreno sea un número entero de 4 dígitos.
    Valida que el país o paises sea introducidos en forma de arreglo.
    Valida que los géneros sean introducidos en forma de arreglo.
    Valida que los géneros introducidos esten dentro de los géneros aceptados*.

    Crea un método estático que devuelva los géneros aceptados*.
    Valida que la calificación sea un número entre 0 y 10 pudiendo ser 

    decimal de una posición.

    Crea un método que devuelva toda la ficha técnica de la película.
    Apartir de un arreglo con la información de 3 películas genera 3 

    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

    Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
    Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
    Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */ 

class Pelicula {
  constructor({id, titulo, director, estreno, pais, generos, calificacion}){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB();
    this.validarTitulo();
    this.validarDirector();
    this.validarEstreno();
  }

  validarCadena(propiedad,valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
      if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`);
      return true;
  }

  validarLongitudCadena(propiedad,valor,longitud){
    if(valor.length > longitud) return console.error(`${propiedad} "${valor}" supera los ${longitud} caracteres`);
    return true;
  }

  validarIMDB(id){
    if(this.validarCadena("IMDB id",id)){
      if(!/^[a-z]{2}[0-9]{7}$/.test(id)){
        return console.error(`IMDB id ${id} no es valido, debe tener 9 caracteres, los cuales 
          debe tener 2 letras minusculas y despues 7 numeros`);
      }
    }
  }

  validarTitulo(titulo){
    if(this.validarCadena("titulo",titulo)){
      this.validarLongitudCadena("titulo",titulo,100);
    }
  }

  validarDirector(director){
    if(this.validarCadena("director",director)){
      this.validarLongitudCadena("director",director,50);
    }
  }

  validarEstreno(estreno){
    if(!/^[0-9]{4}$/.test(estreno)){
      return console.error(`la fecha de estreno ${estreno} no es valido, debe tener 4 numeros, los cuales 
          indican el año en que salio la pelicula`);
    }
  }

}


const peli = new Pelicula();