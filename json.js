const json = {
    cadena: "Oscar",
    numero: 21,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter: "no tengo",
        email: "pipesegoviaalvarado@gmail.com"
    },
    nulo: null
}

console.log(json);

//todas las propiedad del json debe ir con dobles comillas, se parece a un objeto:
console.log(JSON.stringify(json));

