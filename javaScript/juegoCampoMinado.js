function msm(){
	coorX = prompt("Escoge posicion en X (Entre 0 y 2): ");
	coorY = prompt("Escoge posicion en Y (Entre 0 y 2): ");
}

alert("Inicia el juego Minado");
var campo = [["1","0","0"],
			 ["0","1","0"],
			 ["0","0","1"]];
document.write(campo);

var opcionUsuario;
msm();
alert("Coordenadas del Usuario [" + coorX + "] [" + coorY + "]");

if((coorX <= 2 && coorY <= 2)){
	if(campo[coorX][coorY]=="1"){
		alert("BOOM!!! - Area Minada :( ");
	}	
}else{
	alert("BOOM! - Te saliste del campo");
}