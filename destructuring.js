const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perro"],
    //metodos get an set de un objeto en JS.
    get nombreGato(){
        return this.nombre.toUpperCase();
    },
    set nombreGato(nuevoNombre){
        this.nombre = nuevoNombreGato;
    },
    set agregarEnemigos(nuevoEnemigo){
        this.enemigos.push(nuevoEnemigo);
        console.log(this.enemigos);
    }
}

//vamos aplicar destructuracion del objeto.
//se aplica el alias con los dos puntos (nombre:nombreGato);

//se aplica tambien por defecto la propiedad, se puede con alias o sin alias
const {nombre:nombreGato = "Sin nombre",edad,duerme,enemigos} = gato;

console.log(nombreGato, edad, enemigos);
console.log(gato.nombreGato);
console.log(gato.nuevoNombreGato = "Bigotes");
console.log(gato.agregarEnemigos = "Oscar")

//Destruccturacion en arreglos y en objetos

const numeros = [10,20,30,40];

let[one,two,three,four] = numeros
console.log(one.two,three,four);

const persona = {
    nombre="Oscar",
    apellido="Alvarado",
    edad=21
}

let{nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);