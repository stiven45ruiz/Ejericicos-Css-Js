//Ejercio 1
const promedio = document.getElementById("promedio");
function promedion()
{
    var n1 = parseInt(document.getElementById("nota1").value)
    var n2 = parseInt(document.getElementById("nota2").value)
    var n3 = parseInt(document.getElementById("nota3").value)
    var n3 = parseInt(document.getElementById("nota3").value)

    var sumaN = n1 + n2 + n3
    var promedioNotas = sumaN/3
    if(promedioNotas>3)
    {
        promedio.innerHTML = ("Felicitaciones. Tu promedio de las notas es: " + Math.round(promedioNotas))
    }
    else
    {
        promedio.innerHTML = ("Sigue Intentandolo. Tu promedio de las notas es: " + Math.round(promedioNotas))
    }
}

//Ejercicio 2

const valorSalario = document.getElementById("valorSalario")
function salario()
{
    var nombre = document.getElementById("nombre")
    var salarioHora = parseInt(document.getElementById("SPH").value)
    var horasTrabajadas = parseInt(document.getElementById("horasTrabajadas").value)

    if(horasTrabajadas>48)
    {
        var salario =  salarioHora * horasTrabajadas
        var hExtras = horasTrabajadas - 48
        var SalarioExtras = (hExtras*salarioHora)*0.35
        var SalarioNeto = salario + SalarioExtras
        console.log(SalarioNeto)
        valorSalario.innerHTML = ("Su salario es de $"+SalarioNeto+" Salario por horas extra: $"+SalarioExtras)
        
    }

    

}

//Ejercicio 3

const numeroM = document.getElementById("numeroM")
function numeroMedio()
{
    var numero1 = parseInt(document.getElementById("numero1").value)
    var numero2 = parseInt(document.getElementById("numero2").value)
    var numero3 = parseInt(document.getElementById("numero3").value)
    if(numero1>numero2)
    {
        if(numero2>numero3)
        {
            numeroM.innerHTML = ("El numero medio Es "+ numero2)
        }
        else if (numero1>numero3)
        {
            numeroM.innerHTML = ("El numero medio Es "+ numero3)
        }
        else
        {
            numeroM.innerHTML = ("El numero medio Es "+ numero1)
        }
    }
    else if(numero1>numero3)
    {
            numeroM.innerHTML = ("El numero medio Es "+ numero1)
    }
    else
    {
        numeroM.innerHTML = ("El numero medio Es "+ numero3)
    }
}



//Ejercicio 4


const resultadoIntereses = document.getElementById("resultadoIntereses")
function liqIntereses()
{
    var cedula = prompt("Ingrese su numero de cedula.")
    var nombre = prompt("Ingrese su Nombre.")
    var tipoCuenta = parseInt(prompt("Ingrese Su tipo de cuenta \n1: Ahorros \n2: Corriente \n3: Hipotecario \n4: Prestamos"))
    var saldoActual = parseInt(prompt("Ingrese su saldo"))
    var saldonuevo, interes, porsentajeInte;
    function calculo()
    {
        interes = saldoActual*porsentajeInte
        saldonuevo = saldoActual + interes
        resultadoIntereses.innerHTML = ("Su liquidacion de intereses es de $"+interes+" Su nuevo saldo es de $"+saldonuevo)
    }

    switch (tipoCuenta) {
        case 1:
            porsentajeInte = 0.10
            calculo();
            break;
        case 2:
            porsentajeInte = 0.8
            calculo();
            break;
        case 3:
            porsentajeInte = 0.12
            calculo();
            break;
        case 4:
            porsentajeInte = 0.5
            calculo();
            break;
        default:
            break;
    }
}

//Ejercicio 5
const Numeromayor = document.getElementById("Numeromayor")
function numMayor()
{
    var primernumero = parseInt(document.getElementById("primernumero").value)
    var segundonumero = parseInt(document.getElementById("segundonumero").value)
    if(primernumero>segundonumero)
    {
        Numeromayor.innerHTML = ("El numero mayor es "+primernumero)
    }
    else{
        Numeromayor.innerHTML = ("El numero mayor es "+segundonumero)
    }
}

//Ejercicio 6
const totalApagar = document.getElementById("totalApagar")
function totalpagar()
{
    var valorMatricula = prompt("Ingrese el valor de la matricula")
    var numeroHijos = prompt("Ingrese la cantidad de hijos")
}