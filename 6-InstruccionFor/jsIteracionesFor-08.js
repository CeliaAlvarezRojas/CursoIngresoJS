function mostrar()
{

 let numero;
 let primo = 1;

// pedir numero
numero = parseInt(prompt("ingrese numero"));

// deberia hacer que una variable tome los valores
// desde el 1 hasta el numero ingresado (utilzando un bucle)

 for(let i = 1; i <= numero; i++){
 // tengo que analizar si el valor tomado por la variable es par.
 // para mostrarlo y contarlo.
	if(numero % 1 ==0 ){
		primo++;
	}
 }
 if(primo != 2 ){
 alert(numero +"No es primo");
 }
 else {
	 alert(numero + " Es primo");
 }
}//FIN DE LA FUNCIÓN


