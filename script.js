
    function Limpar(valor1, valor2, saida){
        document.getElementById(valor1).value='';
        document.getElementById(valor2).value='';
        document.getElementById(saida).innerHTML='';
    }
 
    function Calcular(numero1, numero2, operacao){
        var num1 = document.getElementById(numero1).value;
        var num2 = document.getElementById(numero2).value;
        var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
        var expressao = num1 + operador + num2;
        var ap;
        var resultado = eval(expressao);
        if(operador =='+'){
                ap =  'A soma de ' +num1+' e ' +num2+ ' é ' +resultado; 
       }
       if(operador == '-'){
            ap = 'A diferença entre ' +num1+ ' e ' +num2+ ' é ' +resultado;
       }
       if(operador == '*'){
            ap = 'O produto' +num1+ ' por ' +num2+ ' é ' +numero;
       }
       if(operador == '/'){
         ap = 'O quociente de ' +num1+ ' dividido por ' +num2+ ' é ' +resultado; 
       }

        document.getElementById("saida").innerHTML=ap;
        
       
      
    }
    

    
