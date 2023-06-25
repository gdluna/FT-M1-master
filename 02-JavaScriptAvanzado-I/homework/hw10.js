function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();

/*  setTimeout(() => {
    console.log("este es el primer mensaje");
  }, 5000);
  setTimeout(() => {
    console.log("este es el segundo mensaje");
  }, 3000);
  setTimeout(() => {
    console.log("este es el tercer mensaje");
  }, 1000); */
  
  // La función "printing" luego de ser llamada, inmediatamente ejecuta el console.log que muestra el número "1", luego el console.log que muestra el número "4" y luego de esto comienza con la ejecución de los console.log que están dentro de las funciones asíncronas setTimeout. Así es que primero se ejecuta el console.log que muestra el número "3", debido a que en dicha función asíncrona el tiempo de delay está configurado a "0" y, finalmente, 1 segundo después se ejecuta el console.log que muestra el número "2".