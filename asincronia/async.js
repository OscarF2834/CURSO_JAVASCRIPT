console.log("Este es el inicio del programa - Temporizadores");

//Se ejecuta una vez, en cierta cantidad de tiempo en milisegundos
setTimeout(()=>{
    console.info("Esto se va a ejecutar en tiempo determinado");
},3000);

//Se ejecuta infinitamente, hasta parar en cierta cantidad de tiempo.
setInterval(()=>{
    console.info(new Date().toLocaleTimeString())
},1000);

/**
 * Conceptos de asincronia, codigos bloqueantes y no bloqueantes
 */

 /*Iniciamos con  el tema de los temporizadores en javascript, importantes para la 
        Programacion Asincrona*/
      console.log("Inicio del temporizador");

      setTimeout(() => {
        console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
      }, 3000);

      console.log("Ya se ejecuto una sola vez el temporizador setTimeout");

      let temporizador = setInterval(() => {
        console.log(`Ejecutando un setInterval, esto se ejecuta indefinididamente por el tiempo que
            le pasamos al setInterval`);
      }, 3000);

      setInterval(() => {
        console.log(new Date().toLocaleTimeString());
      }, 1000);
      //Esto sirve para limpiar el setInterval o el temporizador
      clearInterval(temporizador);

      //Los callbacks

      function cuadradoCallback(value, callback) {
        setTimeout(
          () => {
            callback(value, value * value);
          },
          0 | (Math.random() * 1000),
        );
      }

      cuadradoCallback(0, (value, result) => {
        console.log("Inicio de la callback");
        console.log(`Callback: ${value} , ${result}`);

        cuadradoCallback(1, (value, result) => {
          console.log(`Callback: ${value} , ${result}`);

          cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value} , ${result}`);

            //Los callbacks

            function cuadradoCallback(value, callback) {
              setTimeout(
                () => {
                  callback(value, value * value);
                },
                0 | (Math.random() * 100),
              );
            }

            cuadradoCallback(0, (value, result) => {
              console.log("Inicio de la callback");
              console.log(`Callback: ${value} , ${result}`);

              cuadradoCallback(1, (value, result) => {
                console.log(`Callback: ${value} , ${result}`);

                cuadradoCallback(2, (value, result) => {
                  console.log(`Callback: ${value} , ${result}`);

                  cuadradoCallback(3, (value, result) => {
                  console.log(`Callback: ${value} , ${result}`);
                });
                });
              });
            });
          });
        });
      });

    //las promesas
    function elevoAlCuadrado(numero){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(typeof numero !== "number"){
                    reject(`Èl ${numero} no es un numero`);;
                }else{
                    const resultado = Math.pow(numero,2);
                    resolve({
                        numero,
                        cuadrado: resultado
                    });
                }
            }, 1000);
        });
    }

    //Aqui se hace el consumo de la promesa:
    elevoAlCuadrado(2).then((resultado1)=>{
        console.log(`El resultado es ${resultado1.numero} es de ${resultado1.cuadrado}`)
    })

//async y await

function alCuadrado(numero){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof numero !== "number"){
                reject(`El dato ${numero} no es un numero`);
            }else{
                resolve({
                    numero,
                    resultado: Math.pow(numero,2)
                })
            }
        }, 3000);
    })
}

async function funcionAsincronaDeclarada() {
    try {
        console.log("Inicio de la funcion asincrona");

        let obj = await alCuadrado(0);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(1);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(2);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(3);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(4);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(5);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        console.log("Fin de la funcion asincrona")
    } catch (error) {
        console.log(error)
    }
}

//otra forma de escribirlo es de la siguiente manera o en forma de funcion flecha:

const funcionAsincrona = async () => {
    try {
        console.log("Inicio de la funcion asincrona");

        let obj = await alCuadrado(0);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(1);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(2);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(3);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(4);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        obj = await alCuadrado(5);
        console.log(`El resultado de ${obj.numero} elevado al cuadrado es de ${obj.resultado}`);

        console.log("Fin de la funcion asincrona")
    } catch (error) {
        console.log(error)
    }
}

funcionAsincronaDeclarada();