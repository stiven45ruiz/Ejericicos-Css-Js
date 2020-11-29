const adivina = Math.random();
const resultado = document.getElementById("resultado");
var i = 0

function listo ()
{
    var numero = parseInt(document.getElementById("numeroAdiv").value);
    if (numero ==  Math.round(adivina * 100))
    {
        resultado.innerHTML = ("¡GENIAL! lo adivinaste en "+i+" intentos");
    }
    else if (numero > Math.round(adivina * 100)) 
    {
        resultado.innerHTML = ("Pista: El numero es menor!"); 
        i++    
    }
    else if (numero < Math.round(adivina * 100))
    {
        resultado.innerHTML = ("Pista: El numero es mayor!"); 
        i++    
    }
    else
    {
        resultado.innerHTML = ("Eso no es un numero");
    }  

}