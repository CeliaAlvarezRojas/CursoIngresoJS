/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let suma = 0;
	let promedio;
	let numero;

	// while (seguir == 'si'){
	do {

	 	numero = parseInt(prompt("ingrese un número"));
		suma = suma + numero;
		contador++;
		seguir = prompt("¿Queres ingresar un nuevo numero");
 
	}while (seguir == 's');

	promedio = suma / contador ;
	
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value= promedio;



}//FIN DE LA FUNCIÓN