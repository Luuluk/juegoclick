var counterVal = 0;

tiempo = 50;



function incrementClick() {
    updateDisplay(++counterVal)

    if (counterVal == 100){
        alert ("Felicitaciones, llegaste al máximo de puntos...Rompé el record")

    
      } 

    }
    

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
  
   
}




function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 

	if (tiempo == 0) {
        alert ("Refrescá la página")
        clearTimeout (temporizador)
        document.getElementById('boton').style.display = 'none'
    
    
        

    tiempo = 0; 

   }
   
}



let temporizador = setInterval(restarTiempo,1000);



// Lo unico que faltaría es ver como agregar cuando NO cumple con los clicks y no llega al máximo de puntaje al terminar el tiempo