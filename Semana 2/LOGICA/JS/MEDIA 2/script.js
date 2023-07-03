var escolhaTipoMedia = Number(window.prompt(`Qual é o tipo de média que deseja calcular?

1-Aritmética
2-Ponderada
`))

if (escolhaTipoMedia == 1) {
    var nota01 = Number(window.prompt('Digite a nota 1: '))
    var nota02 = Number(window.prompt('Digite a nota 2: '))
    var nota03 = Number(window.prompt('Digite a nota 3: '))

    var media = (nota01 + nota02 + nota03) / 3
    console.log(`O tipo da média escolhida foi a: Aritmética

A média entre ${nota01}, ${nota02} e ${nota03} é igual a: ${media}`)

    if (media >= 7) {
        console.log('Passou de ano!')
    } else {
        console.log('Está de recuperação!')
    }
} else if (escolhaTipoMedia == 2) {
    var nota01 = Number(window.prompt('Digite a nota 1: '))
    var nota02 = Number(window.prompt('Digite a nota 2: '))
    var nota03 = Number(window.prompt('Digite a nota 3: '))

    var media = ((nota01 * 3) + (nota02 * 3) + (nota04 * 4)) / (3 + 3 + 4)

    console.log(`O tipo da média escolhida foi a: Aritmética

A média entre ${nota01}, ${nota02} e ${nota03} é igual a: ${media}`)

    if (media >= 7) {
        console.log('Passou de ano!')
    } else {
        console.log('Está de recuperação!')
    }
}else{
    console.log('Opção inválida, tente novamente!')
}