function mostrar()
{
	let destino;
	let estacion;
	let descuento = 0;
	let aumento = 0;
	let precioFinal;
	const PRECIO = 15000;

// Relevamiento de datos de entrada 

	estacion = document.getElementById("xtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


	/*switch(estacion){
		case "Invierno":
		switch (destino){	
		case "bariloche":
			aumento = 20;
		case 	
			break;
		case "Otoño":
			break;
		case "Primavera":
		case "Verano":
			break;
		}

	}
*/
	switch (estacion){
		
	case "invierno":
		if (destino == "Bariloche") {
			aumento = 20;
		}
		else if (destino == "Cataratas" || destino == "Cordoba"){
			descuento = 10;
		}
		else {
			descuento = 20;
		}
		break;

	case "Verano":
			if (destino == "Bariloche") {
				descuento = 20;
			}
			else if (destino == "Cataratas" || destino == "Cordoba"){
				aumento = 10;
			}
			else {
				aumento = 20;
			}
			break;

	case "Otono":
	case "Primavera":
		    if (destino!= "Cordoba"){
					aumento = 10;
				}
			break;	
		}
		
	// Calculo del precio final de acuerdo al aumento o descuento 		
	if (aumento != 0 ){
		precioFinal = PRECIO - PRECIO * aumento/ 100;
	} 

	else if (descuento != 0){
		precioFinal = PRECIO - PRECIO * descuento/ 100;
	
	}
	else {
		precioFinal= Precio;
	}
	alert("El precio final es $ " +precioFinal);	
	
	


}//FIN DE LA FUNCIÓN