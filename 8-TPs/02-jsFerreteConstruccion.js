/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

 

}


function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;


    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2* radio * Math.PI; 

    alert(Math.PI);

    
}
function Materiales () 
{
    
    let largo;
    let ancho;
    let area;
    let materiales;


    largo = parseInt(document.getElementById("txtIdLargo").Value);

    ancho = parseInt(document.getElementById("txtIdAncho").Value);

    radio = parseInt(document.getElementById("txtIdRadio").value);

    area =  largo * ancho;

    cal = area * 3;
    cemento = area * 2;

    alert(" Se necesita  " +cemento +"de cemento " + "y " +cal + "de cal "); 

}