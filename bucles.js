//La variable es local y no global

for (let i=0; i<20; i++){
    if(i==12){
        continue;
    }
    document.writeln(i + "<br>");
}

document.writeln("<br>")

//for in y for of
let animales = ["gato", "perro", "tiranosaurio rex"];

for (let animal in animales) {
   document.writeln(animal + "<br>");
}

document.writeln("<br>")

for (let animal of animales) {
    document.writeln(animal + "<br>");
}