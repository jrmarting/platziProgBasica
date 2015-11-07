//Dibujar lineas diagonales y rellenar el circulo

var dibujo, lienzo, t , b;
function inicio(){
	console.log("Buenas");
	dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    //Inicializamos el color de relleno de la figura
    lienzo.fillStyle = "#0AF";
    lienzo.beginPath();
    lienzo.strokeStyle = "#0AF";
    lienzo.arc(150,150,100, (Math.PI * 2), false);
    lienzo.closePath();
    //Confirmamos que finalizamos la figura y se proceda a rellenar la figura
    lienzo.fill();
    lienzo.stroke();

    lienzo.strokeStyle = "#00F";
    var lineaX = 300, lineaY = 0;
    
    for(var linea = 0; linea <= 60; linea++){
    	lienzo.beginPath();
    	lienzo.moveTo(lineaX, 0);
    	lienzo.lineTo(300, lineaY);
    	lienzo.stroke();
        lienzo.closePath();  
        lineaX -= 10;
        lineaY += 10; 
    //    console.log(linea + "Liena en X: " + lineaX + " Linea en Y: " + lineaY);
    }   

    //console.log("Aqui empieza pal otro lado \n" );
     var lineaX = 300, lineaY = 300;

    for(var linea = 0; linea <= 60; linea++){
    	lienzo.beginPath();
    	lienzo.moveTo(lineaX, 300);
    	lienzo.lineTo(300, lineaY);
    	lienzo.stroke();
        lienzo.closePath();  
        lineaX -= 10;
        lineaY -= 10; 
        console.log(linea + "Liena en X: " + lineaX + " Linea en Y: " + lineaY);
    } 
}