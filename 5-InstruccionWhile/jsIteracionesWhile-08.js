/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	// declarar las variables
	//genero un bucle del tipo mientras el usuario quiera (do while)
	// pido numero 
	// analizo el signo
	// acumulo el numero donde corresponda (post/ neg)

	// despues del bucle
	// mostramos los resultados.

	let numero;
	let positivos = 0;
	let negativos = 1;
	let flag = 0;
	let seguir;

 	do {
	    numero = parseInt(prompt("ingrese numero"));

		if( numero >= 0 ){
		positivos = positivos + numero;
		}
		else {
		contadorNegativo++
		negativos = negativos * numero;
		
		}
		seguir = prompt("Quiere ingresar otro numero");
	
	}while (seguir == 's');
	

	

	document.getElementById.getElementById("txtIdSuma").value = positivos;
	document.getElementById.getElementById("txtIdProducto").value = negativos;

}//FIN DE LA FUNCIÓN