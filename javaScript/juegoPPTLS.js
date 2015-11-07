function msm(){
	opcionUsuario = prompt("Escoge" + "\n" + "1. Piedra" + "\n" + "2. Papel" + "\n" + "3. Tijera" + "\n" + "4. Lagarto" + "\n" + "5. Spock");
}

function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opcionUsuario;
var opcionMaquina = patito(0,4);

var opciones = ["Piedra", "Papel", "Tijera","Lagarto","Spock"];

msm();
opcionUsuario -= 1;

if (opcionUsuario>5) {
	alert("Dale campeon... Esta vez escoge bien");
	msm();
}

alert("Escogiste " + opciones[opcionUsuario]);
alert("javaScript escogio " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste!");
    }
    else if (opcionMaquina == lagarto) 
   	{
   		 alert("Ganaste! - Aplastaste al Lagarto");
   	}
   	else if(opcionMaquina == spock)
    {
        alert("Perdiste! - Spock te acada de vaporizar");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == spock)
    {
        alert("Ganaste! - desmentiste a Spock");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Perdiste! - lagarto come papel");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == spock)
    {
        alert("Perdiste! - Spock rompe Tijera");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Ganaste! - acabas de decapitar al lagarto");
    }
}
else if(opcionUsuario == lagarto)
{
    if(opcionMaquina == piedra)
    {
        alert("Perdiste! - Te acaban de aplastar");
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste! - Buen provecho comiendo papel");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Perdiste! - Te quitaron la cabeza");
    }
    else if(opcionMaquina == spock)
    {
        alert("Ganaste! - Envenenaste a Spock");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Empate! - Lucha hasta el Final");
    }
}
else if(opcionUsuario == spock)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste! - Lo dejaste hecho polvo");
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste! - Papel refuta todo lo que dices...");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste! - Rompistes las tijeras");
    }
    else if(opcionMaquina == spock)
    {
        alert("Empate! - Larga vida y prosperidad");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Perdiste! - Envenenaste a Spock :(");
    }
}
	
