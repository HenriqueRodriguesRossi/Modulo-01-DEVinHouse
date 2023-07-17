import Animal from "./Animal.js"

export default class Gato extends Animal{
    constructor(nome, idade){
        super()
        this.som = "Miado"
    }
}