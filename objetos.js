let auto1 = {
    marca: 'Renault',
    modelo: '9',
    peso: '950',
    color: 'Rojo Dinamo'
}

let auto2 = {
    marca: 'Fiat',
    modelo: 'uno',
    peso: '1000',
    color: 'Rojo'
}

console.log("El color del auto 1 es: ", auto1.color);

const vendedor = {
    nombre: "pedro",
    apellido: "Gonzalez",
    empresa: "Auto S.A",
    habilidadesBlandas : [
        'Carisma',
        'Puntualidad'
    ],
    vender: function(){
        return "Pedro ha vendido un auto";
    },
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(vendedor.vender());