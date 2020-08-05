let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	

eleccionMaquina = Math.round(Math.random() * 2 + 1 ); 

mostrarResultado();
alert(eleccionMaquina); 
}//FIN DE LA FUNCIÓN

function piedra(){

	 let Comosalio; 

		if (eleccionMaquina == 1){
		Comosalio = "Empate";
		ContadorDeEmpates++;
	}
	else if (eleccionMaquina == 2){
		Comosalio = "Perdiste" ;
		ContadorDePerdidas++;
	}
	else {
		Comosalio = "Ganaste";
		ContadorDeGanadas++;
	}

	 comenzar();
	 
}
function papel()
{

	if (eleccionMaquina == 1){
		alert ("Ganaste");
		ContadorDeGanadas++;
	}
	else if (eleccionMaquina == 2){
		alert ("Empate");
		ContadorDeEmpates++;
	}
	else {
		alert (eleccionMaquina + " Perdiste");
		ContadorDePerdidas++;
	}

}
function tijera()
{
	if (eleccionMaquina == 1){
		alert ("Perdiste");
		ContadorDePerdidas++;
    }
    else if (eleccionMaquina == 2){
		alert ("Ganaste");
		ContadorDeGanadas++;
    }
    else {
		alert (eleccionMaquina + " Empate");
		ContadorDeEmpates++;
    }
 comenzar();

}

function mostrarResultado()
{

	document.getElementById("txtIdContadorDeEmpatadas").value = ContadorDeEmpatadas;
	document.getElementById("txtIdContadorDeGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdContadorDePerdidas").value = ContadorDePerdidas;




}