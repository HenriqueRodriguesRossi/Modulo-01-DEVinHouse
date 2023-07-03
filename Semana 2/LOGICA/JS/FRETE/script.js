var distanciaEntrega = Number(window.prompt('Digite a distância da entrega (em KM):'))
var pesoProduto = Number(window.prompt('Digite o peso do produto (em KG): '))

var calculoFrete = (distanciaEntrega * 0.10) + (pesoProduto * 0.50)

console.log('O valor do frete ficará em: R$' + calculoFrete)