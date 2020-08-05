/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

function comenzar()
{
//Genero el número RANDOM entre 1 al 3

eleccionMaquina = Math.round(Math.random() * 2 + 1 ); 
 //alert("numero"+eleccionMaquina);

}//FIN DE LA FUNCIÓN

function piedra()
{ 
    if (eleccionMaquina == 1){
    alert ("Empate");
}
else if (eleccionMaquina == 2){
    alert ("Perdiste");
}
else {
    alert (eleccionMaquina + " Ganaste");
}
//alert("Pulsaste la piedra");

}//FIN DE LA FUNCIÓN
function papel()

{ 

    if (eleccionMaquina == 1){
    alert ("Ganaste");
}
else if (eleccionMaquina == 2){
    alert ("Empate");
}
else {
    alert (eleccionMaquina + " Perdiste");
}
//alert("Pulsaste el papel");

}//FIN DE LA FUNCIÓN
function tijera()
{

        if (eleccionMaquina == 1){
        alert ("Perdiste");
    }
    else if (eleccionMaquina == 2){
        alert ("Ganaste");
    }
    else {
        alert (eleccionMaquina + " Empate");
    }
    
    //alert("Pulsaste la tijera");


}//FIN DE LA FUNCIÓN