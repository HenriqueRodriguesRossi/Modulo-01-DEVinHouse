<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PEDIDO FEITO</title>
</head>

<body>
    <?php
    $pedido = $_REQUEST['codigo'];

    switch ($pedido) {
        case 1: {
                echo "🍔 Hambúrguer Tradicional<br>🍔 Hambúrguer Vegetariano<br>🍔 Hambúrguer de Frango";
                break;
            }
        case 2: {
                echo  "🍟 Batata Frita Tradicional<br>🍟 Batata Frita com Queijo<br>🍟 Batata Frita com Bacon";
                break;
            }
        case 3: {
                echo "🥗 Salada Caesar<br>🥗 Salada Grega<br>🥗 Salada de Frutas";
                break;
            }
        case 4: {
                echo "🍕 Pizza de Queijo<br>🍕 Pizza Margherita<br>🍕 Pizza de Pepperoni";
                break;
            }
        case 5: {
                echo "🍣 Sushi de Salmão<br>🍣 Sushi de Atum<br>🍣 Sushi Vegetariano";
                break;
            }
        case 6: {
                echo "🍦 Sorvete de Chocolate<br>🍦 Sorvete de Baunilha<br>🍦 Sorvete de Morango";
                break;
            }
        case 7: {
                echo "🍩 Donut Tradicional<br>🍩 Donut com Cobertura de Chocolate<br>🍩 Donut com Recheio de Creme";
                break;
            }
        case 8: {
                echo "🍹 Suco de Laranja<br>🍹 Suco de Abacaxi<br>🍹 Suco de Morango";
                break;
            }
        case 9: {
                echo "🍰 Bolo de Chocolate<br>🍰 Bolo de Cenoura<br>🍰 Bolo de Limão";
                break;
            }
        default: {
                echo "Produto não encontrado!";
            }
    }
    ?>
    <br>
    <button>
        <a href="./index.html">
            Voltar
        </a>
    </button>
</body>

</html>