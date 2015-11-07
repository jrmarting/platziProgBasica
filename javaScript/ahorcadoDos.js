var arregloPalabras = ["madera","platzi","acamica","murcielago","linio","elementos","familia","variable"];
var hombre,  largo, l, b, espacio;
var contexto, auxIntentos = 4;

var trofeo = {
    trofeoURL: "imagenes/gano.jpg",
    trofeoOk: false
};

var pobre = {
    cabezaIniURL: "imagenes/cab-ini.png",
    cabezaIniOk: false,
    cabezaFinURL: "imagenes/cab-fin.png",
    cabezaFinOk: false,
    troncoUnoURL: "imagenes/tronco.png",
    troncoUnoOk: false,
    troncoDosURL: "imagenes/tronco-dos.png",
    troncoDosOk: false,
    troncoTresURL: "imagenes/tronco-tres.png",
    troncoTresOk: false,
};

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

function iniciar(){

    arreglo();
    
    l = document.getElementById("letra");
    b = document.getElementById("boton");

    var canvas = document.getElementById("c");
    canvas.width = 500;
    canvas.height = 400;
    contexto = canvas.getContext("2d");
    hombre = new Ahorcado(contexto);

    //Convierte a mayúscula un texto
    palabre = palabre.toUpperCase();

    //Declaro un array con n espacios de acuerdo al largo de la mostrarPalabra
    espacio = new Array(palabre.length);
    //Agregamos una funcion que se dispare al dar click al boton
    b.addEventListener("click",agregarLetra);
    document.addEventListener("keydown", teclado);

    mostrarPista(espacio); 

    trofeo.imagen = new Image();
    trofeo.imagen.src = trofeo.trofeoURL;
    trofeo.imagen.onload = confirmarFondo;

    pobre.cabezaIni = new Image();
    pobre.cabezaIni.src = pobre.cabezaIniURL;
    pobre.cabezaIni.onload = confirmarCabezaIni;
    
    pobre.cabezaFin = new Image();
    pobre.cabezaFin.src = pobre.cabezaFinURL;
    pobre.cabezaFin.onload = confirmarCabezaFin;

    pobre.troncoUno = new Image();
    pobre.troncoUno.src = pobre.troncoUnoURL;
    pobre.troncoUno.onload = confirmarTroncoUno;

    pobre.troncoDos = new Image();
    pobre.troncoDos.src = pobre.troncoDosURL;
    pobre.troncoDos.onload = confirmarTroncoDos;

    pobre.troncoTres = new Image();
    pobre.troncoTres.src = pobre.troncoTresURL;
    pobre.troncoTres.onload = confirmarTroncoTres;
   
}

function confirmarCabezaIni(){
    this.dibujar;
}

function confirmarCabezaFin(){
   this.dibujar
}

function confirmarTroncoUno(){
    this.dibujar;
}

function confirmarTroncoDos(){
    this.dibujar;
}

function confirmarTroncoTres(){
    this.dibujar;
}

function confirmarFondo(){
    trofeo.trofeoOk = true;
    this.dibujar2;
}

Ahorcado.prototype.dibujar = function (){

	var dibujo = this.contexto;
    var pobreDibujo;

	//Dibujando el poste
	dibujo.beginPath();
	dibujo.moveTo(150,110);
	dibujo.lineTo(150,50);
	dibujo.lineTo(300,50);
	dibujo.lineTo(300,350);
	dibujo.lineWidth = 10;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath();

    if(this.intentos > 0){
		//Intentos == 1 significa rostro
        pobreDibujo = pobre.cabezaIni;
		dibujo.drawImage(pobreDibujo, 110, 100);

        if(this.intentos > 1){
        	//Intentos == 2 significa tronco
            pobreDibujo = pobre.troncoUno;
            dibujo.drawImage(pobreDibujo, 108, 158);

			 if(this.intentos > 2)
                {
                    //Intentos == 3 significa brazos
                    pobreDibujo = pobre.troncoDos;
                    dibujo.drawImage(pobreDibujo, 108, 158);

                 if(this.intentos > 3){
                    //Intentos == 4 significa piernas
                    pobreDibujo = pobre.troncoTres;
                    dibujo.drawImage(pobreDibujo, 108, 158);

                	if(this.intentos > 4){
                		//Intentos == 5 significa que me mori
                        pobreDibujo = pobre.cabezaFin;
                        dibujo.drawImage(pobreDibujo, 110, 100);
                    } 
            	}
            }
        }
	}
}

Ahorcado.prototype.dibujar2 = function (){

    console.log("Gola");
    contexto.drawImage(trofeo.imagen, 100, 100);
    desabilitar();

}

//A medida de cada intento va trazando parte de nuestro muñeco e id si estamos vivos aun
Ahorcado.prototype.trazar = function (){
	this.intentos++;
    var validacion = "";
	     
    if(this.intentos >= this.maximo){
        this.vivo = false;
        alert("¡Estas Muerto!... X(");
        desabilitar();
    }

    this.dibujar();  

    var aux = document.getElementById("intentos");
    console.log("Aqui deberia estar: " + auxIntentos);
    aux.innerText = auxIntentos--;     
}

//Funciones para entender un evento de click o darle <enter>
function agregarLetra(){
    var letra =l.value;
    l.value = "";
    mostrarPalabra(palabre, hombre, letra);
}

function teclado(datos){
    var codigo = datos.keyCode;
    if (codigo == 13){
        var letra =l.value;
        l.value = "";
        mostrarPalabra(palabre, hombre, letra);
    }    
}

function mostrarPalabra(palabre, ahorcado, letra){
    
    var encontrado = false;
    var p;
    var bandera = 0;
    letra = letra.toUpperCase();
    for(p in palabre){        
        if(letra == palabre[p]){
            espacio[p] = letra;
            encontrado = true;
        }
    }
    mostrarPista(espacio);

    //Si no lo encotro

    if(!encontrado){
        ahorcado.trazar();
    }

    for(i=0; i < largo; i++)
    {
        if(espacio[i] == undefined)
        {
            bandera = 1;
        }        
    }

    if(bandera == 0)
    {
        ahorcado.dibujar2();
    }
}

function mostrarPista(espacio){

    var pista = document.getElementById("pista");
    var texto = "";
    var i;
    largo = espacio.length;
      
    for(i=0 ; i<largo ; i++){
        if(espacio[i] != undefined){
            texto = texto + espacio[i];
        }else{
            texto += "_ ";
        }
    }

    pista.innerText = texto; 
}

function arreglo(){
    var ram = Math.floor(Math.random() * (arregloPalabras.length - 1)) + 1;
    palabre = arregloPalabras[ram];   
    console.log(arregloPalabras[ram]);
}

//Gane o pierda desabilita tanto teclado, boton y caa de texto
function desabilitar(){
    document.removeEventListener("keydown", teclado);
    l.disabled=true;
    b.disabled=true;
}