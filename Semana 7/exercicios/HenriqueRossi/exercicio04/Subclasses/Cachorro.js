import Animal from "./Animal.js";

export default class Cachorro extends Animal{
    constructor(nome, idade){
        super()
        this.som = "latido";
    }
}