function sumar(a,b,...c){
    let resultado = a + b;
    c.forEach(function(n){
        resultado += n;
    })
    return resultado;
}

console.log(sumar(3,4,5));

//operador spread o de propagacion

const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

console.log(array1, array2);

//aqui utilizamos el spread operator
const arrayResultado = [...array1,...array2];
console.log(arrayResultado);