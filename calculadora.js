class Calculadora{

    constructor(){}

    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    potencia(num1,num2){
        return Math.pow(num1,num2);
    }
    raizCuadrada(num1){
        return Math.sqrt(num1);
    }
    raizCubica(num1){
        return Math.cbrt(num1);
    }
}

const calculadora = new Calculadora();

alert("Que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2:Resta, 3:Multiplicacion, 4:Division, 5:potencia, 6:raiz Cuadrada, 7:raiz cuadrada");

if(operacion == 1){
    let numero1 = prompt("Inserte el primer numero: ");
    let numero2 = prompt("inserte el segundo numero: ");

    let resultado = calculadora.sumar(numero1,numero2);
    alert(`El resultado de la operacion es ${resultado}`);
}
else if(operacion == 2){
    let numero1 = prompt("Inserte el primer numero: ");
    let numero2 = prompt("inserte el segundo numero: ");

    let resultado = calculadora.restar(numero1,numero2);
    alert(`El resultado de la operacion es ${resultado}`);
}
else if(operacion == 3){
    let numero1 = prompt("Inserte el primer numero: ");
    let numero2 = prompt("inserte el segundo numero: ");

    let resultado = calculadora.multiplicar(numero1,numero2);
    alert(`El resultado de la operacion es ${resultado}`);
}
else if(operacion == 4){
    let numero1 = prompt("Inserte el primer numero: ");
    let numero2 = prompt("inserte el segundo numero: ");

    let resultado = calculadora.dividir(numero1,numero2);
    alert(`El resultado de la operacion es ${resultado}`);
}
else if(operacion == 5){
    let numero1 = prompt("Inserte el primer numero: ");
    let numero2 = prompt("inserte el segundo numero: ");

    let resultado = calculadora.potencia(numero1,numero2);
    alert(`El resultado de la operacion es ${resultado}`);
}
else if(operacion == 6){
    let numero1 = prompt("Inserte el numero: ");

    let resultado = calculadora.raizCuadrada(numero1);
    alert(`El resultado de la operacion es ${resultado}`);
}
else if(operacion == 7){
    let numero1 = prompt("Inserte el primer numero: ");

    let resultado = calculadora.raizCubica(numero1);
    alert(`El resultado de la operacion es ${resultado}`);
}