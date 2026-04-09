class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInfo(){
        document.writeln(this.info + "<br>");
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    /*static ladrar(){
        alert("¡WAW!");
    }*/
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

let perro = new Perro("perro",5,"marron","pincher");
let gato = new Animal("gato",2,"negro");
let pajaro = new Animal("pajaro",1,"verde");

//Haciendo uso del metodo estatico:
//Perro.ladrar();

perro.setRaza = "Pedro";
document.writeln(perro.getRaza)
