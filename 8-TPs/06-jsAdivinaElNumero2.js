/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos= 0;
let flag= 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round(Math.random() * 99 + 1 ); 
	contadorIntentos = 0;
    alert("Listo... ya pense un numero... Trata de adivinar");
    document.getElementById("txtIdIntentos").value = contadorIntentos;
	document.getElementById("txtIdNumero").focus();
	flag=1;
}

function verificar()
{
	let numero;

	switch(contadorIntentos){
  
	    case 1:
			alert("Usted es un psiquico");
			break;
		case 2: 
	  		alert("excelente percepción");
			break;
		case 3:
			alert("Esto es suerte");	  
			break;
		case 4:
			alert("Excelente técnica");
			break;
		case 5: 
	  		alert("usted está en la media");
			break;
		case 6:
		case 7:
		case 8:
		case 9: 
		case 10:	
			alert("falta técnica");	  
			break;
			
        default:
			alert("afortunado en el amor");
	  }
	
	document.getElementById("txtIdNumero").value = "";
	document.getElementById("txtIdNumero").focus();
	
	

}