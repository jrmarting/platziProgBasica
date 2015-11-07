/*
//Uso del alert (out) - prompt (in) en javaScript
var peso;
var pesoEnMarte; // CamelCase

alert("¿Quieres saber tu peso en marte?");
peso = prompt("¿Cuál es tu peso en Kg?");
peso = parseInt(peso);

if(peso > 0){

pesoEnMarte = (peso / 9.81) * 3.711;

alert( "Tu peso en Marte es: " + pesoEnMarte + " Kg.");

}else{
	alert("Ingrese su peso");
}
*/

//Genera un número aleatorio entre un rango de enteros
function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = patito(0,2);

opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2");

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligi0 " + opciones[opcionMaquina]);

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
}
else
{
    alert("¿Pos qué carajo?");
}


