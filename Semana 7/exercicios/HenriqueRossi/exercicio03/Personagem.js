export default class Personagem {
    nome
    vida
    constructor(nome) {
      this.nome = nome;
      this.vida = 100;
    }

    sofreuDano(percentualDano) {
      this.vida -= percentualDano;
      if (this.vida < 0) {
        this.vida = 0;
      }
    }

    usouKitMedico() {
      this.vida += 10;
      if (this.vida > 100) {
        this.vida = 100;
      }
    }
}