/*let free = false;

const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad? ");
    if(edad > 18){
        if(time >= 2 && time <= 7 && free == false){
            alert("Puedes pasar gratis porque eres la primer persona en ingresar a las 2 AM.");
            free = true;
        }else{
            alert(`son las ${time}Hs. Puedes pasar pero tienes que pagar un dinerito`);
        }
    }else{
        alert("Mira papu!!,  no puedes pasar MAQUINOLA");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for(let i=0; i<cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[i][1]++;
    }
}*/

//EJERCICIO 3 - CELULARES:

class Celular{
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("celular sera reiniciado");
        }else{
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada con una resolucion de ${this.resolucionDeCamara}`);
    }
    tomarVideo(){
        alert(`grabando video en una resolucion de ${this.resolucionDeCamara}`);
    }
    mostrarInfo(){
        return `
            color: <b></b></br>
            peso: <b></b></br>
            tamaño: <b></b></br>
            resolucion de camara: <b></b></br>
            resolucion de video: <b></b></br>
            memoria ram: <b></b></br>
        `;
    }
}

celular1 = new Celular("rojo","150g","5'","hd","1GB");
celular1 = new Celular("blanco","155g","5.4'","full hd","2GB");
celular1 = new Celular("negro","146g","5.9'","full hd","2GB");

celular1.presionarBotonEncendido()
celular1.tomarFoto();
celular1.tomarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();