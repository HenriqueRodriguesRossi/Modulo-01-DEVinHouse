<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CALCULADORA</title>
</head>
<body>
   <?php
        $operacao = strtoupper($_REQUEST['operacao']) ?? 0;
        $numero01 = $_REQUEST['numero01'] ?? 0;
        $numero02 = $_REQUEST['numero02'] ?? 0;

        if($operacao == 1 || $operacao == 'ADIÇÃO'){ 
            $soma = $numero01 + $numero02;
            echo "Números escolhidos: $numero01 e $numero02 <br> Operação escolhida: Adição <br> Resultado: $soma";
        }else if($operacao == 2 || $operacao == 'SUBTRAÇÃO'){
            $subtracao = $numero01 - $numero02;
            echo "Números escolhidos: $numero01 e $numero02 <br>
            Operação escolhida: Subtração <br> Resultado: $subtacao";
        }else if($operacao == 3 || $operacao == 'DIVISÃO'){
            $divisao = $numero01 / $numero02;
            echo "Números escolhidos: $numero01 e $numero02 <br> Operação escolhida: Divisão <br> Resultado: $divisao";
        }else if($operacao == 4 || $operacao == 'MULTIPLICAÇÃO'){
            $multiplica = $numero01 * $numero02;
            echo "Números escolhidos: $numero01 e $numero02 <br> Operação escolhida: Multiplicação <br> Resultado: $multiplica";
        }else if($operacao == 5 || $operacao == 'EXPONENCIAÇÃO'){
            $exponencia = $numero01 ** $numero02;
            echo "Números escolhidos: $numero01 e $numero02 <br> Operação escolhida: Exponenciação <br> Resultado: $exponencia";
        }else if ($operacao == 6 || $operacao == 'RAIZ QUADRADA'){
            $raiz = $numero01 * $numero01;
            echo "Número escolhido: $numero01 <br> Operação escolhida: Raiz Quadrada <br> Resultado: $raiz";
        }else{ 
            echo "Opção inválida!"; 
        }
   ?> 
    <br>
   <button><a href="./index.html">Voltar</a></button>
</body>
</html>