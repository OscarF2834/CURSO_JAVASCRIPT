const obtenerInformacion = (materia)=>{
    materias = {
        Fisica: ["perez", "pedro", "pepito", "cofla", "maria"],
        Programacion: ["oscar", "pedro", "juan", "pepito"],
        Logica:["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
        Quimica: ["Lopez", "pedro", "juan", "pepito", "cofla", "maria"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        return false;
    }
}

const mostrarInformacion = (materia) =>{
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.writeln(`el profesor de <b>${informacion[1]}</b> es: <b style = "color: red">${profesor}</b><br>
            los alumnos son: <b style = "color: blue">${alumnos}</b><br><br>`);
    }
}

const cantidadDeClases = (alumno) =>{
    let cantidadTotal = 0;
    for(info in informacion[2]){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
        }
    }
    return cantidadTotal;
}

mostrarInformacion("Fisica");
mostrarInformacion("Programacion");
mostrarInformacion("Logica");
mostrarInformacion("Quimica");