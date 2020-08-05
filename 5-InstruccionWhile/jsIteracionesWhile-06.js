function mostrar()
{
	/*let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;
	let suma;
	let promedio;

	numero1 = parseInt(prompt ("ingrese un número"));
	numero2 = parseInt(prompt ("ingrese un número"));
	numero3 = parseInt(prompt ("ingrese un número"));
	numero4 = parseInt(prompt ("ingrese un número"));
	numero5 = parseInt(prompt ("ingrese un número"));


	suma = numero1+ numero2 + numero3 + numero4 +numero5;
	promedio = suma/5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value  = promedio;
	*/


	let i = 0;
	let suma = 0;
	let promedio;
	let numero;
	
	while (i < 5 ){

	numero = parseInt(prompt("ingrese un número"));
	// numero = numero + parseInt(prompt("ingrese un número"));

	suma = suma + numero;

		i++;
	}

	promedio = suma /5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value= promedio;

	document.getElementById("txtIdSuma").value = suma;
	//document.getElementById("txtIdPromedio").value= suma/5;
		

}//FIN DE LA FUNCIÓN