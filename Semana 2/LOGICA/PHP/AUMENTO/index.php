<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AUMENTO</title>
</head>
<body>
    <form action="aumento.php" method='get'>
        <div>
            <label>Nome:</label>
            <input type="text" name="nome" id="nome" placeholder="Digite o nome do funcionário...">
        </div>
        <div>
            <label>Salário:</label>
            <input type="number" name="salario" id= "salario" placeholder="Digite o salário do funcionário...">
        </div>
        <div>
            <label>Cargo:</label>
            <input type="text" name="cargo" placeholder="Digite o cargo do funcionário...">
        </div>
        <div>
            <button>Calcular aumento</button>
        </div>
    </form>
</body>
</html>