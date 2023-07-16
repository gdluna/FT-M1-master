function saludar (saludo) {
    return function (nombre) {
        let saludoCompleto = saludo + ' ' + nombre;
        console.log(saludoCompleto);
        return saludoCompleto;
    }
}

let saludarHola = saludar('Hola');

let retorno = saludarHola('Pedrito');

console.log(retorno);

// -------------------------------------------------------

let crearFuncion = function () {
    let array = [];
    for (let i = 0; i < 3; i++) {
        array.push(function() {
            let indice = 'El índice es el ' + i;
            return indice;
        });
    }
    return array;
}

let funciones = crearFuncion();

let miFunción = funciones[1]();

console.log (miFunción);
