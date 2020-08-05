/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	let validación;

	// pido el dato
	clave = prompt("Ingrese clave");

	/* validar el dato*/

	while (clave != "utn750"){
		
		// lo pido nuevamente
		clave = prompt("Clave invalida. Reingrese clave: ");
	}
	
	// dato valido ya puedo utilizarlo
	alert("Clave correcta!");
	
	
}//FIN DE LA FUNCIÓN
