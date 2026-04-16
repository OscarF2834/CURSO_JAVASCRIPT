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