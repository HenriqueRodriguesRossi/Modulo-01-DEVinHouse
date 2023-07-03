var nomeFuncionario = String(window.prompt('Qual é o seu nome?'))
var dataInicioFerias = window.prompt('Qual será a data de início das suas férias?')
var dataTerminoFerias = window.prompt('Qual será a data de término das suas férias?')
var dataPedido = new Date()

var texto = `Caro(a) Responsável, 

Gostaria de solicitar as minhas férias conforme as informações abeixo: 

Nome do Funcionário: ${nomeFuncionario}

Data de Início: ${dataInicioFerias}

Data de Término: ${dataTerminoFerias}

Agradeço antecipadamente pela atenção e aguardo pela confirmação do meu pedido

Atenciosamente,
Data do Pedido: ${dataPedido.toLocaleDateString()}`

console.log(texto)