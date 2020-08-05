/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{ // declaracion variables

	let numero;
	let sumanegativos = 0;
	let sumapositivos = 0;
	let contadorNegativos = 0;
	let contadorPositivos = 0;
	let contadorcero = 0 ;
	let contadorpares = 0;
	let promediopositivos = 0;
	let promedionegativos = 0;
	let Diferencia;
	let seguir;

	// deberia generar un bucle del tipo mientras que el usuario quiera (do while).
	
	do{
	// codgigo dentro del bucle ( es el codigo que se debe realizar n cantidad de veces.)

		numero = parseInt(prompt("Ingrese un número: " ));

		// analizo el signo del numero
		if(numero > 0){
			// positivo
			//tengo que sumar los posivitos
			sumapositivos = sumapositivos+numero;
			// tengo que contar los positivos
			contadorPositivos++;
		}
		else if(numero == 0) {
			// cero
			// tengo que contar los ceros.
			contadorcero++;
		}
		else{
		
			//negativo
			// tengo que sumar los negativos
			sumanegativos = sumanegativos + numero;
			// tengo que contar los negativos
			contadorNegativos++;

			//---------------------------------------
			// me fijo si el numero es par y la cuento
			if(numero % 2 == 0){
				contadorpares++;
			}
		}
		seguir = prompt ("¿Quiere ingresar un numero?");
	} while (seguir == 's')

	// codigo que va afuera del bucle.
	// Hacer los calculos con los valores obtenidos dentro del bucle 
	// Hacer promedios y diferecias.

	if (contadorPositivos != 0){
	  promediopositivos = sumapositivos/ contadorPositivos;
	}
	if (contadorNegativos != 0){
	 
	  promedionegativos = sumanegativos/ contadorNegativos;
	}

	 diferencia = contadorPositivos - contadornegativos;

// mostrar informacion 

document.write("1 - suma de los negativos: " +sumaNegativos + "</br>");
document.write("2- Suma de los positivo: " +sumaPositivos + "</br>");
document.write("3- Cantidad de positivos: " +contadorPositivos + "</br>");
document.write("4 - cantidad de Negativos: " +contadorNegativos+ "</br>");
document.write("5- Cantidad de ceros: " +contadorCero + "</br>");
document.write("6- Cantidad de pares: " +contadorPares + "</br>");
document.write("7- Promedio de positivos: " +promediopositivos + "</br>");
document.write("8- Promedio de negativos: " +promedionegativos + "</br>");
document.write("9- Diferencias: " + diferencia + "</br>");


}//FIN DE LA FUNCIÓN