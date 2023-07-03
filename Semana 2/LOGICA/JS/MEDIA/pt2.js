var nota01 = Number(window.prompt('Digite a nota 1: '))
var nota02 = Number(window.prompt('Digite a nota 2: '))
var nota03 = Number(window.prompt('Digite a nota 3: '))
var nota04 = Number(window.prompt('Digite a nota 4: '))

var media = (nota01 + nota02 + nota03 + nota04) / 4

console.log(media)

if(media >= 7){
    console.log('Passou de ano!')
}else{
    console.log('Está de recuperação!')
}