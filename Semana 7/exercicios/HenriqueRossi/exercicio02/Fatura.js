export default class Fatura {
    id
    descricao
    quantia 
    preco
    
    constructor(id, descricao, quantia=0, preco=0){
        this.id = id
        this.descricao = descricao
        this.quantia = quantia
        this.preco = preco
    }

    obterValorTotal(){
        const valorFinal = this.quantia * this.preco
        return valorFinal
    }
    get valorFinal(){
        return this.quantia * this.preco
    }
}