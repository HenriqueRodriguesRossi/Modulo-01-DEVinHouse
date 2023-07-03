<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUCESSO!</title>
</head>
<body>
    <?php 
        $item = $_REQUEST['codigo'];
        $qtd = $_REQUEST['quantidade'];

        if($item == 100){
    
            $valorFinal = $qtd * 1.20;
            echo "PRODUTO ESCOLHIDO: Cachorro Quente <br>
            QUANTIDADE: $qtd <br>
            VALOR FINAL: R$ $valorFinal <br>";
        
        }else if($item == 101){
        
            $valorFinal = $qtd * 1.30;
            echo "PRODUTO ESCOLHIDO: Bauru Simples <br>
            QUANTIDADE: $qtd <br>
            VALOR FINAL: R$ $valorFinal <br>";
        
        }else if($item == 102) {
        
            $valorFinal = $qtd * 1.50;
            echo "PRODUTO ESCOLHIDO: Bauru com Ovo <br>
            QUANTIDADE: $qtd <br>
            VALOR FINAL: R$ $valorFinal <br>";
        
        } else if($item == 103){
        
            $valorFinal = $qtd * 1.20;
            echo "PRODUTO ESCOLHIDO: Hambúrger <br>
            QUANTIDADE: $qtd <br>
            VALOR FINAL: R$ $valorFinal <br>";
        
        }else if($item == 104){
        
            $valorFinal = $qtd * 1.30;
            echo "PRODUTO ESCOLHIDO: Cheeseburguer <br>
            QUANTIDADE: $qtd <br>
            VALOR FINAL: R$ $valorFinal <br>";
        
        }else if($item == 105){
        
            $valorFinal = $qtd * 1;
            echo "PRODUTO ESCOLHIDO: Refrigerante <br>
            QUANTIDADE: $qtd <br>
            VALOR FINAL: R$ $valorFinal <br>";
        
        }else{
            echo "Produto não encontrado, tente novamente!";
        }
    ?>

    <button><a href="./index.html">Voltar</a></button>
</body>
</html>