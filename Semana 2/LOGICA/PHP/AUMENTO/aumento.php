<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AUMENTO</title>
</head>
<body>
    <?php
       $nome = $_REQUEST['nome'];
       $salario = $_REQUEST['salario'];
       $cargo = strtoupper($_REQUEST['cargo']);

       if ($cargo == 'GERENTE'){ 
            $aumento = ($salario * 10) / 100;
            $salarioFinal = $salario + $aumento;

            echo "Aqui estão as informações do $nome: <br> Nome do funcionário: $nome <br> Salário antigo: $salario <br> Salário após aumento: $salarioFinal <br> Diferença: R$ $aumento";
       }else if($cargo == 'ENGENHEIRO' ){
        $aumento = ($salario * 10) / 100;
        $salarioFinal = $salario + $aumento;

        echo "Aqui estão as informações do $nome: <br> Nome do funcionário: $nome <br> Salário antigo: $salario <br> Salário após aumento: $salarioFinal <br> Diferença: R$ $aumento";
       }else if($cargo == "TÉCNICO"){
        $aumento = ($salario * 30) / 100;
            $salarioFinal = $salario + $aumento;

            echo "Aqui estão as informações do $nome: <br> Nome do funcionário: $nome <br> Salário antigo: $salario <br> Salário após aumento: $salarioFinal <br> Diferença: R$ $aumento";
       }else{
        $aumento = ($salario * 30) / 100;
        $salarioFinal = $salario + $aumento;

        echo "Aqui estão as informações do $nome: <br> Nome do funcionário: $nome <br> <br> Salário antigo: $salario <br> Salário após aumento: $salarioFinal <br> Diferença: R$ $aumento";    
       }
    ?>

    <button><a href="./index.php">Voltar</a></button>
</body>
</html>