
    function Limpar(id1, id2){
        document.getElementById("id1").value=" ";
        document.getElementById("id2").value=" ";
    }

    function Calcular(numero1, numero2, operacao){
        var num1 = document.getElementById(numero1).value;
        var num2 = document.getElementById(numero2).value;
        var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectIndex].value;
        var expressao = num1 + operacao + num2;
        resultado = eval(expressao);
        document.getElementById(saida).innerHTML = resultado;

    }
