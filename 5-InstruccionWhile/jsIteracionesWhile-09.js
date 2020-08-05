/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// dentro del bucle
	// pido un numero
	// tengo que averiguar si es la primera iteracion 
	// si es la primera iteracion inicializado max y min con ese numero
	// en las restantes iteraciones hay que compararlo contra
	// el maixmo anterior y contra el minimo anterior
	// si tengo un numero maximo o un nuevo minimo actualizo segun corresponda
	// despues del buble
	// mostrar los resultados (max/ min)
	let numero;
	let maximo;
	let minimo;
	let flag = 0;
	let seguir;

	 do {
		numero = parseInt(prompt("ingrese numero")); 
		

		if (flag == 0 ){
			maximo = numero;
			minimo = numero;
			flag = 1;
		}
		if( numero > maximo ){
			maximo = numero;
			
			}
		else if( numero < minimo){
			minimo = numero;
		}
		seguir = prompt("Quiere ingresar otro numero");
	}while (seguir == 's');

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
	
}//FIN DE LA FUNCIÓN