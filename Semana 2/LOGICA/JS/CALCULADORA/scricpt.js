var opcao = Number(window.prompt(`Qual operação deseja fazer: 

1-Adição
2-Subtração
3-Divisão
4-Multiplicação
5-Exponenciação
6-Raiz Quadrada`))

switch (opcao) {
    case 1: {
        var numero01 = Number(window.prompt('Digite o primeiro número:'))
        var numero02 = Number(window.prompt('Digite o segundo número:'))

        var soma = numero01 + numero02

        console.log('O resultado da adição foi: ' + soma)
        break
    } case 2: {
        var numero01 = Number(window.prompt('Digite o primeiro número:'))
        var numero02 = Number(window.prompt('Digite o segundo número:'))

        var subtracao = numero01 - numero02

        console.log('O resultado da subtração foi: ' + subtracao)
        break
    } case 3: {
        var numero01 = Number(window.prompt('Digite o primeiro número:'))
        var numero02 = Number(window.prompt('Digite o segundo número:'))

        var divisao = numero01 / numero02

        console.log('O resultado da divisão foi: ' + divisao)
        break
    } case 4: {
        var numero01 = Number(window.prompt('Digite o primeiro número:'))
        var numero02 = Number(window.prompt('Digite o segundo número:'))

        var multiplicacao = numero01 * numero02

        console.log('O resultado da multiplicação foi: ' + multiplicacao)
        break
    } case 5: {
        var numero01 = Number(window.prompt('Digite o primeiro número:'))
        var numero02 = Number(window.prompt('Digite o segundo número:'))

        var exponenciacao = numero01 ** numero02

        console.log('O resultado da exponenciação foi: ' + exponenciacao)
        break
    } case 6: {
        var numero01 = Number(window.prompt('Digite um número:'))

        var raizQuadrada = numero01 * numero01

        console.log('O resultado da exponenciação foi: ' + raizQuadrada)
        break
    }
}