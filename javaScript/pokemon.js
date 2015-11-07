var b, numero;

function Pokemon(n,v,a)
{

	this.grito = "Pika!",
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function()
	{
		alert(this.grito);
	}
}

function inicio()
{
	numero = Math.floor((Math.random() * 2) + 1); 
	console.log(numero);
	document.write("<img src=imagenes/pokedex.png />");

	if(numero == 1){
		var ratata = new Pokemon("Rattata", 40, 2);
		ratata.vida = ratata.vida-20;
		ratata.grito ="ratata !!!	";
		ratata.gritar();

		nombrePokemon.innerText = ratata.nombre;
		datosPokemon.innerText = "Vida: " + ratata.vida + " "+ "Su poder de ataque: " + ratata.ataque + " Su grito: " + ratata.grito;
		document.write("<img src=imagenes/rattata.png />");
	}else{
		var charmander = new Pokemon("Charmander", 60, 21);
		charmander.grito ="Char Char !!!	";
		charmander.gritar();
	
		nombrePokemon.innerText = charmander.nombre;
		datosPokemon.innerText = "Vida: " + charmander.vida + " "+ "Su poder de ataque: " + charmander.ataque + " Su grito: " + charmander.grito;
		document.write("<img src=imagenes/charmander.png />");
	}	

}


// // function Pokemon(nombrePoke, vidaPoke, ataPoke){

// // 	var estructuraPokemon = 
// // 	{
// // 		nombre: nombrePoke,		
// // 		vida: vidaPoke, 
// // 		ataque: ataPoke,
// // 		datos : {tipo: "Tierra", debilidad: "Fuego"}
// // 	};
// // 	return estructuraPokemon;
// // }

// // var pikachu = Pokemon("charmander",100,55);
// // var bulbasaur = Pokemon("ratata",90,50);

// // console.log(bulbasaur)

