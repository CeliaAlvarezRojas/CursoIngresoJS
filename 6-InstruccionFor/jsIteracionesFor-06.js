function mostrar()
{
	
// declaracion de variables
let numero;
let contadorPares = 0;

// pedir numero
numero = parseInt(prompt("ingrese numero"));

// deberia hacer que una variable tome los valores
// desde el 1 hasta el numero ingresado (utilzando un bucle)

 for(let i = 1; i <= numero; i++){
 // tengo que analizar si el valor tomado por la variable es par.
 // para mostrarlo y contarlo.
	if(i % 2 == 0){
		console.log(i);
		contadorPares++;
	}
 }


// dentro del bucle


// despues de bucle 
//mostrar la cantidad de pares encontrados. 

console.log( "Cantidad de pares encontrados es " + contadorPares);


}//FIN DE LA FUNCIÓN