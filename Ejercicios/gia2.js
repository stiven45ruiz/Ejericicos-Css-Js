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

//Ejercico 2

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