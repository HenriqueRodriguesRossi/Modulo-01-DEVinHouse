export default class Colaborador{
    cpf
    nomeColaborador
    salario

    constructor(cpf, nomeColaborador, salario){
        this.cpf = cpf
        this.nomeColaborador = nomeColaborador
        this.salario = salario
    }

    promover(aumentoPercentual) {
        const aumento = (this.salario * aumentoPercentual) / 100;
        this.salario += aumento;
    }
}
