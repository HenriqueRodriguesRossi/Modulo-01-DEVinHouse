<?php
$questoes = [
    "O que é um algoritmo?\n
    a) Um algoritmo é um conjunto de instruções para resolver um problema.\n
    b) Um algoritmo é um dispositivo eletrônico utilizado para armazenar dados.\n
    c) Um algoritmo é uma linguagem de programação.\n
    d) Um algoritmo é uma rede de computadores.",

    "Quais são as características de um bom algoritmo?\n
    a) Precisão, eficiência e clareza.\n
    b) Complexidade, abstração e recursividade.\n
    c) Aleatoriedade, flexibilidade e diversidade.\n
    d) Sintaxe, semântica e pragmática.",

    "O que é a complexidade de um algoritmo?\n
    a) A complexidade de um algoritmo é a quantidade de instruções que ele possui.\n
    b) A complexidade de um algoritmo é o tempo necessário para executá-lo.\n
    c) A complexidade de um algoritmo é a quantidade de memória utilizada por ele.\n
    d) A complexidade de um algoritmo é a dificuldade de compreendê-lo.",

    "O que é um laço (loop) em programação?\n
    a) Um laço é um erro em um programa de computador.\n
    b) Um laço é uma estrutura de controle que repete um bloco de código várias vezes.\n
    c) Um laço é uma função que retorna um valor.\n
    d) Um laço é um tipo de dado em programação.",

    "O que é uma estrutura condicional?\n
    a) Uma estrutura condicional é um tipo de dado em programação.\n
    b) Uma estrutura condicional é um conjunto de instruções para resolver um problema.\n
    c) Uma estrutura condicional é uma função que retorna um valor.\n
    d) Uma estrutura condicional é uma estrutura de controle que permite tomar decisões com base em uma condição.",

    "O que é a recursão?\n
    a) A recursão é um tipo de erro em programação.\n
    b) A recursão é uma técnica que permite que uma função chame a si mesma.\n
    c) A recursão é uma estrutura de controle que repete um bloco de código várias vezes.\n
    d) A recursão é um conjunto de instruções para resolver um problema.",

    "O que é a ordenação de dados?\n
    a) A ordenação de dados é uma técnica que permite encontrar um item específico em uma lista.\n
    b) A ordenação de dados é uma técnica que permite agrupar elementos em categorias.\n
    c) A ordenação de dados é uma técnica que permite organizar os elementos de uma lista em uma determinada ordem.\n
    d) A ordenação de dados é uma técnica que permite eliminar elementos duplicados de uma lista.",

    "O que é a busca binária? \n
    a) A busca binária é uma técnica de pesquisa que divide repetidamente uma lista pela metade.
    b) A busca binária é uma técnica de ordenação de dados que utiliza uma árvore binária.
    c) A busca binária é uma técnica de ordenação de dados que utiliza uma pilha.
    d) A busca binária é uma técnica de criptografia que utiliza uma chave binária.",

    "O que é um algoritmo de ordenação? \n
    a) Um algoritmo de ordenação é um dispositivo eletrônico utilizado para armazenar dados de forma organizada.
    b) Um algoritmo de ordenação é um conjunto de instruções que organiza os elementos de uma lista em uma determinada ordem.
    c) Um algoritmo de ordenação é uma função que retorna um valor ordenado.
    d) Um algoritmo de ordenação é uma linguagem de programação especializada em organização de dados.",

    "O que é a eficiência de um algoritmo? \n
    a) A eficiência de um algoritmo é a medida da sua precisão na resolução de um problema.
    b) A eficiência de um algoritmo é a quantidade de memória utilizada por ele.
    c) A eficiência de um algoritmo é a quantidade de instruções que ele possui.
    d) A eficiência de um algoritmo é a medida da sua velocidade de execução."
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    for ($i = 0; $i < count($questoes); $i++) {
        $resposta = $_POST["resposta$i"];
        echo "Questão " . ($i + 1) . " - Resposta: $resposta<br>";
    }
}
?>

<form method="post">
    <?php for ($i = 0; $i < count($questoes); $i++) : ?>
        <p><?php echo nl2br($questoes[$i]); ?></p>
        <input type="text" name="resposta<?php echo $i; ?>" placeholder="Resposta">
        <?php
        endfor;
        ?>

    <button type="submit">Enviar</button>
</form>