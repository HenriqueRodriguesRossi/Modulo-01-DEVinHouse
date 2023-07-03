var item = Number(window.prompt('Digite o código do produto:'))
var quantidade = Number(window.prompt('Digite a quantidade:'))

if(item == 100){
    
    var valorFinal = quantidade * 1.20
    console.log(`PRODUTO ESCOLHIDO: Cachorro Quente
    QUANTIDADE: ${quantidade}
    VALOR FINAL: R$ ${valorFinal}`)

}else if(item == 101){

    var valorFinal = quantidade * 1.30
    console.log(`PRODUTO ESCOLHIDO: Bauru Simples
    QUANTIDADE: ${quantidade}
    VALOR FINAL: R$ ${valorFinal}`)

}else if(item == 102) {

    var valorFinal = quantidade * 1.50
    console.log(`PRODUTO ESCOLHIDO: Bauru com Ovo
    QUANTIDADE: ${quantidade}
    VALOR FINAL: R$ ${valorFinal}`)

} else if(item == 103){

    var valorFinal = quantidade * 1.20
    console.log(`PRODUTO ESCOLHIDO: Hambúrger
    QUANTIDADE: ${quantidade}
    VALOR FINAL: R$ ${valorFinal}`)

}else if(item == 104){

    var valorFinal = quantidade * 1.30
    console.log(`PRODUTO ESCOLHIDO: Cheeseburguer
    QUANTIDADE: ${quantidade}
    VALOR FINAL: R$ ${valorFinal}`)

}else if(item == 105){

    var valorFinal = quantidade * 1
    console.log(`PRODUTO ESCOLHIDO: Refrigerante
    QUANTIDADE: ${quantidade}
    VALOR FINAL: R$ ${valorFinal}`)

}else{
    console.log('Digite um código válido por favor!')
}