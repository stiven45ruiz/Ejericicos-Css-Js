const numAzar1 = document.getElementById("numAzar1")
const numAzar2 = document.getElementById("numAzar2")
const numAzar3 = document.getElementById("numAzar3")
const resultado = document.getElementById("resultado")
const saldoPrint = document.getElementById("saldoPrint")

var ganancia = 0, saldo = 10000, j = 0

saldoPrint.innerHTML = ("Tu saldo es $"+saldo)

function apostar ()
{
    if (j>0)
    {
        location.reload();
    }
    var reNumAzar1 = 0,reNumAzar2 = 0, reNumAzar3 =0
    var apuesta = parseInt(document.getElementById("apuesta").value)

    reNumAzar1= 3 //Math.floor(Math.random() * (10 - 0)) + 0
    reNumAzar2= Math.floor(Math.random() * (10 - 0)) + 0
    reNumAzar3= Math.floor(Math.random() * (10 - 0)) + 0

    numAzar1.innerHTML = (reNumAzar1)
    numAzar2.innerHTML = (reNumAzar2)
    numAzar3.innerHTML = (reNumAzar3)


    while (saldo<apuesta) {
        resultado.innerHTML = ("Lo siento, Tu saldo es insuficiente")
    }

    if (reNumAzar1 == 7 && reNumAzar2 == 7 && reNumAzar2 == 7) {
        ganancia = apuesta * 0.50
        resultado.innerHTML = ("GENIAL GANASTE $"+ganancia)
        saldo += ganancia
        j++
    }
    else if(reNumAzar1 == reNumAzar2 || reNumAzar2 == reNumAzar3 || reNumAzar1 == reNumAzar3) {
        ganancia = apuesta * 0.30
        resultado.innerHTML = ("GENIAL GANASTE $"+ganancia)
        saldo += ganancia
        j++
    }
    else if(reNumAzar1 == 3 || reNumAzar2 == 3 || reNumAzar3 == 3){
        ganancia = 50
        resultado.innerHTML = ("Premio de consolacion de $"+ganancia)
        saldo += 50
        j++
    }
    else{
        resultado.innerHTML = ("Sigue intentando")
        saldo -= apuesta 
    }
    saldoPrint.innerHTML = ("Tu saldo es $"+saldo)
}