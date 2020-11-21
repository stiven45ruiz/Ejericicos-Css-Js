//punto 1
const resultado = document.getElementById("resultado");

function recibir()
{
   var numero = document.getElementById("inputnumero").value;

   
   var perimetroCua = numero * 4
   resultado.innerHTML = (perimetroCua + " Es el perimetro del cuadro");   
} 

//Punto 2
function cargaImagen()
{
    
    ejercicio3.innerHTML = ("Esta es una imagen cargada en JavaScript");

    var vp = document.getElementById("imagen")
    var ctx = vp.getContext("2d")
    var fondo = {url : "img/flink200.png", cargaOK :  false}

    var iFondo = new Image()
    iFondo.src = fondo.url
    iFondo.addEventListener("load", cargaFondo =>
    {
        fondo.cargaOK = true 
        dibujar()})
        function dibujar() {
            if(fondo.cargaOK){
              ctx.drawImage(iFondo, 0,0)
            }
        }
    

}

//3
const areaTria = document.getElementById("areaTria");
function triangulo()
{
    
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = base * altura
    areaTria.innerHTML = ("El area del triangulo es " + area)

}

//5

const promedio = document.getElementById("promedio");
const NombreNum = document.getElementById("NombreNum");
function promedion()
{
    var n1 = parseInt(document.getElementById("nota1").value);
    var n2 = parseInt(document.getElementById("nota2").value); 
    var n3 = parseInt(document.getElementById("nota3").value);
    var n3 = parseInt(document.getElementById("nota3").value);
    var nCarnet = document.getElementById("NCarnet").value;
    var nombre = document.getElementById("nombre").value;

    var sumaN = n1 + n2 + n3
    var promedioNotas = sumaN/3
    NombreNum.innerHTML = (nombre + " con N° de carnet "+ nCarnet)
    promedio.innerHTML = ("Su promedio de las notas es: " + Math.round(promedioNotas))
    

}
//6
const montollamada = document.getElementById("montollamada")
function calculallamadas()
{
    console.log("hola")
    var valormin = 50
    var valorllamda =0, montoApagar = 0
    var cantidadllamadas = parseInt(prompt("Cuantas llamadas Se hicieron el el mes"))
    
    for(var i = 1;i <= cantidadllamadas;i++)
    {
       var tiempollamada = parseInt(prompt("Ingrese el tiempo en minutos de la llamada ["+i+"]"))
       valorllamda = valormin * tiempollamada
       montoApagar += valorllamda
    }
    montollamada.innerHTML = ("El valor a pagar es de $"+montoApagar)
}

