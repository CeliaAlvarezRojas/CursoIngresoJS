/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let CentigradosFahrenheit;

    temperatura = parseFloat (document.getElementById("txtIdTemperatura").value);

    CentigradosFahrenheit = (temperatura - 32) * 5/9 ;

    alert(CentigradosFahrenheit);
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let Centigrados;

    temperatura = parseFloat (document.getElementById("txtIdTemperatura").value);

    Centigrados = (temperatura * 5/9) + 32;

    alert(Centigrados);

}
