var nome = window.prompt('Qual é o nome do funcionário? ')
var salario = Number(window.prompt('Qual é o salário do funcionário? R$'))
var cargo = window.prompt(`Qual é o cargo do ${nome}? `).toUpperCase()

if (cargo == 'GERENTE' || cargo == 101) {

    var valorAumento = (salario * 10) / 100
    var salarioFinal = salario + valorAumento

    console.log(`Aqui estão as informações sobre o novo salário do ${nome}:     

Nome do funcionário: ${nome}
Salário antigo: ${salario}
Salário atual: ${salarioFinal}
Diferença: ${valorAumento}`)

} else if (cargo == 'ENGENHEIRO' || cargo == 102) {

    var valorAumento = (salario * 20) / 100
    var salarioFinal = salario + valorAumento

    console.log(`Aqui estão as informações sobre o novo salário do ${nome}:     

Nome do funcionário: ${nome}
Salário antigo: ${salario}
Salário atual: ${salarioFinal}
Diferença: ${valorAumento}`)

} else if (cargo == 'TÉCNICO' || cargo == 103) {
    var valorAumento = (salario * 30) / 100
    var salarioFinal = salario + valorAumento

    console.log(`Aqui estão as informações sobre o novo salário do ${nome}:     

Nome do funcionário: ${nome}
Salário antigo: ${salario}
Salário atual: ${salarioFinal}
Diferença: ${valorAumento}`)
} else {
    var valorAumento = (salario * 40) / 100
    var salarioFinal = salario + valorAumento

    console.log(`Aqui estão as informações sobre o novo salário do ${nome}:     

Nome do funcionário: ${nome}
Salário antigo: ${salario}
Salário atual: ${salarioFinal}
Diferença: ${valorAumento}`)
}