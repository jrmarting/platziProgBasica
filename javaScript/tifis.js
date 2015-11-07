var tablero, direccion;

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var fondo = {
	imagenURL : "imagenes/fondo.png",
	imagenOk: false
};

var tifis = {
	x: 400,
	y: 390,
	frenteURL: "imagenes/diana-frente.png",
	frenteOk: false,
	atrasURL: "imagenes/diana-atras.png",
	atrasOk: false,
	derURL: "imagenes/diana-der.png",
	derOk: false,
	izqURL: "imagenes/diana-izq.png",
	izqOk: false,
	velocidad: 20
};

var liz = {
	lizURL: "imagenes/liz.png", 
	lizOk: false,
	x: 40,
	y: 50
};

function inicio(){
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	liz.liz = new Image();
	liz.liz.src = liz.lizURL;
	liz.liz.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
}	

function teclado(datos){
	var codigo = datos.keyCode;
	if (tifis.x == liz.x && tifis.y == liz.y){
		alert("Gracias la he encontrado.. :)");
	}else{
	//En estos ciclos evaluamos la condicion de cuando se quiere moverse y verificamos que no pueda pasar en las posicion de cada obstaculo
		if(codigo == teclas.UP){
			if (tifis.y >= 0){
				if((tifis.y == 210 && tifis.x <=120) || (tifis.y == 210 && tifis.x >=180 && tifis.x <= 220) || (tifis.y == 370 && tifis.x >= 140)){
					console.log("Barrera: " + tifis.x + " " + tifis.y);
				}else{
					tifis.y -= tifis.velocidad;
				}
			}
		}

		if(codigo == teclas.DOWN){
			if (tifis.y < 450){
				if((tifis.y == 150 && tifis.x <=120) || (tifis.y == 290 && tifis.x >= 140)){
				 	console.log("Barrera: " + tifis.x + " " + tifis.y);
				}else{
					tifis.y += tifis.velocidad;
				}
			}
		}
		
		if(codigo == teclas.LEFT){
			if(tifis.x > 0){
				if((tifis.y >= 170 && tifis.y <= 190 && tifis.x ==140) || (tifis.x == 240 && tifis.y <= 190)){
				 	console.log("Barrera: " + tifis.x + " " + tifis.y);
				}else{
					tifis.x -= tifis.velocidad;
				}
			}		
		}
		
		if(codigo == teclas.RIGHT){
			if(tifis.x < 450){
				if((tifis.y <= 190 && tifis.x == 160) || (tifis.x == 120 && tifis.y >= 310 && tifis.y <= 350)){
				 	console.log("Barrera: " + tifis.x + " " + tifis.y);
				}else{
					tifis.x += tifis.velocidad;	
				}
			}
		}
	}

	console.log(tifis.x + " " + tifis.y);	
	
	direccion = codigo;
	dibujar();

}

function confirmarFondo(){
	fondo.imagenOk = true;
	dibujar();
}

function confirmarFrente(){
	tifis.frenteOk = true;
	dibujar();
}

function confirmarAtras(){
	tifis.atrasOk = true;
	dibujar();
}

function confirmarDer(){
	tifis.derOk = true;
	dibujar();
}

function confirmarIzq(){
	tifis.izqOk = true;
	dibujar();
}
function confirmarLiz(){
	liz.lizOk = true;
	dibujar();
}

function dibujar(){
	if(fondo.imagenOk == true){
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	var tifiDibujo = tifis.frente;
	if(tifis.frenteOk && tifis.atrasOk && tifis.derOk && tifis.izqOk){
		if(direccion == teclas.UP){
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.DOWN){
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.LEFT){
			tifiDibujo = tifis.izq;
		}
		if(direccion == teclas.RIGHT){
			tifiDibujo = tifis.der;
		}
		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}
	if(liz.lizOk == true){
		tablero.drawImage(liz.liz, liz.x, liz.y);
	}
}

