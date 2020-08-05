/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f ó m ");

	// condicion 
	// Opcion 1 mientras el dato sea invalido
	// Opcion2 mientras el dato no sea valido
    // Opcion 1 --> Que sexo no sea ni F ni tampoco M
	// Opcion 2 --> Que el sexo sea distinto de "f" o "m"
	// while (!(sexo == 'f' || sexo == 'm' ||sexo == 'F' || sexo == 'M' )){
	// while (sexo != 'f' && sexo != 'm' && sexo != 'F' && sexo != 'M'){
	while (sexo != 'f'&& sexo != "m"){
		sexo = prompt("Error, ingrese f ó m ").toLowerCase();

	}
	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN