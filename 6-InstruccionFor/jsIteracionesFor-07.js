function mostrar()
{

let numero;
let divisor = 0;

// pedir numero
numero = parseInt(prompt("ingrese numero"));

// deberia hacer que una variable tome los valores
// desde el 1 hasta el numero ingresado (utilzando un bucle)

 for(let i = 1; i <= numero; i++){
 // tengo que analizar si el valor tomado por la variable es par.
 // para mostrarlo y contarlo.
	if(numero % i  == 0){
		console.log(i);
		divisor++;
	}
 }
 console.log( "Cantidad de divisores encontrados es " + divisor);


}//FIN DE LA FUNCIÓN