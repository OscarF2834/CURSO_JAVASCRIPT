class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Hola, soy ${this.especie} tengo ${this.edad} año y soy de color ${this.color}`
    }
    verInfo(){
        document.writeln(this.informacion + "<br>");
    }

    //Las funciones flecha no sirven como metodos de clase
}

let perro = new animal("pincher", 1, "cafe");
let gato = new animal("gato", 2, "marron");
let pajaro = new animal("pajaro", 1, "verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();