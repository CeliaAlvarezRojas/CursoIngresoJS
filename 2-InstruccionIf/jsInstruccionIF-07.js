function mostrar()
{

let edad;
let estado;

edad = document.getElementById("txtIdEdad").value;
estado = document.getElementById("estadocivil").value;

if (edad < 18 && estado != "Soltero") {
	alert ("Es muy pequeño para NO ser soltero");
}




}