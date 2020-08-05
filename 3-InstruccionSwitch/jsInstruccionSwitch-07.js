function mostrar()
{
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;

	switch (destino){
		
		case "Bariloche":
		alert("Oeste");
		break;

		case "Cataratas":
			alert("Norte");
			break;	

			case "Ushuaia":
				alert("Sur");
				break;
				
				default: 
					alert("Este");
							

	}
	

}//FIN DE LA FUNCIÓN