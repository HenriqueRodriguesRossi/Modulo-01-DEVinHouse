var peso = Number(window.prompt('Digite o seu peso: '))
var altura = Number(window.prompt('Digite a sua altura: '))

var imc = peso / (altura * 2)

console.log(imc)

if (imc < 18.5){
    console.log('Você está abaixo do peso!')
}else if(imc <= 24.9){
    console.log('Você está no peso ideal!')
}else if(imc <= 29.9){
    console.log('Você está levemente acima do peso!')
}else if(imc <= 34.9){
    console.log('Você está com Obesidade grau 1')
}else if(imc <= 39.9){
    console.log('Você está com Obesidade grau 2')
}