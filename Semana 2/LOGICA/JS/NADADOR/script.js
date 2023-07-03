var idade = Number(window.prompt('Qual é a idade o atleta: '))

if (idade >= 5 || idade <= 7){
    console.log(`A idade do atleta é: ${idade} anos
    
    Ele irá competir na categoria: INFANTIL A`)
}else if(idade >= 8 || idade <= 10){
    console.log(`A idade do atleta é: ${idade} anos
    
    Ele irá competir na categoria: INFANTIL B`)
}else if(idade >= 11 || idade <= 13){
    console.log(`A idade do atleta é: ${idade} anos
    
    Ele irá competir na categoria: JUVENIL A`)
}else if(idade >= 14 || idade <= 17){
    console.log(`A idade do alteta é: ${idade} anos
    
    Ele irá competir na categoria: JUVENIL B`)
}else if (idade >= 18){
    console.log(`A idade do cocmpetidor é: ${idade} anos
    
    ele irá competir na categoria: ADULTA`)
}else if(idade < 5){
    console.log(`A idade do competidor é: ${idade} anos
    
    Ele ainda é muito novo para competir, espere ele ter pelo menos 5 anos!`)
}else{
    console.log(`IDADE INVÁLIDA, TENTE NOVAMENTE!`)
}