function mostrar()
{
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;


	/*if (destino == "Bariloche" || destino == "Ushuaia"){
		alert ("Hace Frio");
	}
		else {
		alert ("Hace calor")

		}
	}*/

	switch (destino){
		
		case "Bariloche":
		case "Ushuaia":	
		alert("Hace FRIO");
		break;

		case "Mar del plata":
		case "Cataratas":
			alert("Hace CALOR");
			break;


	} 


}//FIN DE LA FUNCIÓN