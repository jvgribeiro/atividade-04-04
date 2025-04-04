var nome = document.getElementById("nome_usuario");
var elem = document.getElementById('btn-ex1');
var resposta1 = document.getElementById('res-1');
elem.addEventListener('click', function () {
      

      document.getElementById("res-1").innerHTML = nome.value+ ", Seja bem vindo!" ;
});

var valor1 = document.getElementById('valor_1');
var valor2 = document.getElementById('valor_2');
var sinal = document.getElementById('selecao');
var resultado = document.getElementById('btn_calculo');

resultado.addEventListener('click', function() {
    var valor1Numero = parseFloat(valor1.value); 
    var valor2Numero = parseFloat(valor2.value); 
    
    var total;
    if (sinal.value == "+") {
        total = valor1Numero + valor2Numero;
    } else if (sinal.value == "-") {
        total = valor1Numero - valor2Numero;
    } else if (sinal.value == "/") {
        total = valor1Numero / valor2Numero;
    } else if (sinal.value == "*") {
        total = valor1Numero * valor2Numero;
    }

    document.getElementById("res-2").innerHTML = total;
});


// Atividade 3

var km = document.getElementById('km');
var horas = document.getElementById('horas');
var resultado_km = document.getElementById('btn_velocidade');
resultado_km.addEventListener('click', function(){

    var valorkm = parseFloat(km.value); 
    var valorhora = parseFloat(horas.value); 
    var total_km = valorkm / valorhora;
    
    document.getElementById("res-3").innerHTML = "Sua velocidade média será de: " + total_km + " km/h";
});



