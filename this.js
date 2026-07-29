//vamos a ver lo que es el this.

//aqui lo que devuelve en la consola del navegador es el objeto window
console.log(this);

this.nombre = "contexto global";
console.log(this.nombre);

function imprimir(){
    console.log(this.nombre);
}

//se imprime contexto global.
imprimir();

const obj = {
    nombre: "Contexto objeto",
    imprimir: function(){
        console.log(this.nombre);
    }
}

//aqui lo que imprime es contexto objeto, no contexto global.
obj.imprimir();

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir
}

//aqui imprime el contexto del objeto 2 porque se llama desde el objeto numero 2.
obj2.imprimir();

const obj3 = {
    nombre: "Contexto objeto 3",
    imprimir: ()=>{
        console.log(this.nombre);
    }
}

//como es funcion flecha o arrow function, la imprime como contexto global, no crea un SCOPE!!.
obj3.imprimir();

function Persona (nombre){
    this.nombre = nombre;
    // return console.log(this.nombre);
    return function (){
        console.log(this.nombre);
    }
}

let oscar = new Persona("Oscar");

//call, aply y bind uso del this - tres metodos

this.lugar = "Contexto global";

function saludar (){
    console.log(`${this.lugar}`)
}

saludar();

const obj = {
    lugar: "Contexto objeto"
}

//lama el nuevo contexto, en este caso al del objeto
saludar.call(obj);
saludar.apply(obj);

const persona = {
    nombre: "Oscar",
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();
//imprime hola oscar

const otraPersona = {
    saludar: persona.saludar.bind(persona)
}

otraPersona.saludar();
