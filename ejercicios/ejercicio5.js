//dado el numero en minutos, convertirlo a horas:

function convertirMinutos(minutos){
    const horas = Math.floor(minutos/60);
    const minuto = minutos % 60;
    return {horas, minuto};
}

console.log(convertirMinutos(130));

//calcular el area de un circulo

const calcularArea = (radio) => {
    return Math.PI * (Math.pow(radio,2));
}

console.log(calcularArea(5));

//promedio de tres notas

const promedioNotas = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
}

console.log(promedioNotas(5,6,7));

//intercambiar los valores: que se inviertan los valores.

let a = 10;
let b = 20;

console.log (a = b);
console.log (b = a);