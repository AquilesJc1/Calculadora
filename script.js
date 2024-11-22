function add(numero) {
    var input = document.getElementById("input");
    input.value = input.value + +numero;
}

function operador(sinal) {
    let input = document.getElementById('input');
    let valor1 = document.getElementById('valor1');
    let operador = document.getElementById('operador');

    valor1.value = input.value;

    limpar();

    operador.value = sinal;
}

function resultado() {
    let input = document.getElementById('input');
    let valor1 = document.getElementById('valor1');
    let valor2 = document.getElementById('valor2');
    let operador = document.getElementById('operador');

    valor2.value = input.value;

    limpar();

    if (operador.value == '+') {
        input.value = +valor1.value + +valor2.value;   
    } else if (operador.value == '-') {
        input.value = +valor1.value - +valor2.value;          
    }else if (operador.value == '*') {
        input.value = +valor1.value * +valor2.value;          
    } else if (operador.value == '/') {
        input.value = +valor1.value / +valor2.value;          
    }
    
}

function limpar() {
    var input = document.getElementById("input");
    input.value = '';
}

function tema() {
    let fundo = document.getElementById("body");
    let imagem = document.getElementById("img_tema");
    let tema = document.getElementById("btn_tema");
    let calculadora = document.getElementById("calculadora");


    if (fundo.style.backgroundColor == "rgb(9, 15, 34)") { 

        fundo.style.backgroundColor = "rgb(240, 240, 240)";
        imagem.src = "lua.png";
        tema.style.boxShadow = "2px 0 10px #ccc";
        calculadora.style.boxShadow = "0 0 20px rgb(231, 231, 231)";

    }else{

        fundo.style.backgroundColor = "rgb(9, 15, 34)";
        imagem.src = "sol.png";
        tema.style.boxShadow = "0 0 0";
        calculadora.style.boxShadow = "0 0 0";
    }

}