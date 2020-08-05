/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
  // Nan not a number --> No es un numero //
  // false cuando sea un numero 
	
  let numero;

	numero = parseInt(prompt("ingrese un número entre 0 y 9"));

	//-------OPCION 1 -------------- cuando el valor no es valida
	// cuando el numero este fuera del ranfo o no sea un numero 
	/*while(numero < 0 || numero > 9 || isNaN(numero)) {*/


	 // ------ OPCION 2 ------------------- cuando el valor no es valida
	 // cuando numero no este dentro del rango
	 while(!(numero >= 0 && numero <=9)){
		
		numero = parseInt(prompt("Error, ingrese numero"));
	}
	
	document.getElementById("txtIdNumero").value = numero;

}//FIN DE LA FUNCIÓN