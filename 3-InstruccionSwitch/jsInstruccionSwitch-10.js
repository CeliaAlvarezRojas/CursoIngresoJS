function mostrar()
{
	let destino;
	let estacion;
	
	estacion = document.getElementById("xtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			If (destino == "Bariloche") { 
			alert("Se viaja");
			}
			else {
				alert ("No se viaja");
			}
			break;
		case"Verano":
		break;
		case "Otoño":
			alert (" Se viaja");
		break;
		case "Primavera":	
		if (destino != "Bariloche"){
			alert("Se viaja");
		}		
		else {
			alert("No se viaja");
		}
	}
}

//FIN DE LA FUNCIÓN