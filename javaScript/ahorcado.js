var palabre = "Tamarindo";
var hombre;
//Declaracion de la clase ahorcado
var Ahorcado = function(con){

	//this es la variables locales de la clase, accesible em toda la calse 
	//this.contes es el context de dibujo del canvas que llega porparametro desede la variable con
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
}

Ahorcado.prototype.dibujar = function (){

	var dibujo = this.contexto;

	//Dibujando el poste
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath();
	
	if(this.intentos > 0){
		//Intentos == 1 significa rostro
		dibujo.beginPath();
        dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
        dibujo.strokeStyle = "red";
        dibujo.lineWidth = 5;
        dibujo.stroke();
        dibujo.closePath();

        if(this.intentos > 1){
        	//Intentos == 2 significa tronco
        	dibujo.beginPath();
			dibujo.moveTo(150,180);
			dibujo.lineTo(150,250);
			dibujo.lineWidth = 5;
			dibujo.strokeStyle = "red";
			dibujo.stroke();
			dibujo.closePath();

			 if(this.intentos > 2)
                {
                    //Intentos == 3 significa brazos
                    dibujo.beginPath();
                    dibujo.moveTo(120,220);
                    dibujo.lineTo(150,180);
                    dibujo.lineTo(180,220);
                    dibujo.strokeStyle = "red";
                    dibujo.lineWidth = 5;
                    dibujo.stroke();
                    dibujo.closePath();

                 if(this.intentos > 3){
                    //Intentos == 4 significa piernas
                    dibujo.beginPath();
                    dibujo.moveTo(120,290);
                    dibujo.lineTo(150,250);
                    dibujo.lineTo(180,290);
                    dibujo.strokeStyle = "red";
                    dibujo.lineWidth = 5;
                    dibujo.stroke();
                    dibujo.closePath();

                	if(this.intentos > 4){
                		//Intentos == 5 significa que me mori
                    	dibujo.beginPath();
                    	//Ojo Izquierdo
                    	dibujo.moveTo(125,120);	
                    	dibujo.lineTo(145,145);
                    	dibujo.moveTo(145,120);	
                    	dibujo.lineTo(125,145);
                    	//Ojo Derecho
                    	dibujo.moveTo(160,120);	
                    	dibujo.lineTo(180,145);
                    	dibujo.moveTo(180,120);	
                    	dibujo.lineTo(160,145);
                    	dibujo.strokeStyle = "blue";
                    	dibujo.lineWidth = 5;
                    	dibujo.stroke();
                    	dibujo.closePath();
                	} 
            	}
            }
        }
	}
}

//A medida de cada intento va trazando parte de nuestro muñeco e id si estamos vivos aun
Ahorcado.prototype.trazar = function (){
	this.intentos++;
	if(this.intentos >= this.maximo){
		this.vivo = false;
		alert("¡Estas Muerto!... X(");
	}
	this.dibujar();
}

function iniciar(){
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
	//hombre.trazar();
}