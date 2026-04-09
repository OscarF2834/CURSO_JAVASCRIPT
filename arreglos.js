//la forma de declarar un arreglo en JS es de la siguiente manera:
frutas = ["pera", "Manzana", "Mandarina"]
document.writeln(frutas);
document.writeln(frutas[0]);

let pc = {
    nombre: "Asus",
    procesador: "Intel core I7",
    ram: "16GB",
    espacio: "1TB"
};

document.writeln();

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `El nombre de la computadora es ${nombre} <br>
        el procesador es un ${procesador} <br>
        tiene de ram ${ram} <br>
        y de espacio tiene en total ${espacio}`;


document.writeln(frase + "<br>");