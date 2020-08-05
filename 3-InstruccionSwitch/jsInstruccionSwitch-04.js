function mostrar()
{
	//tomo el mes
	
	let mes 

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert("Tiene 28 días");
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre": 
		case "Diciembre":		
		
		alert ("Tiene 31 días");
		break;

		default:
		alert ("Tienen 30 días");


	}

}//FIN DE LA FUNCIÓN