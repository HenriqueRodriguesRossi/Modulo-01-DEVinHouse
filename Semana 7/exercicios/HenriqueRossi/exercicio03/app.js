import Personagem from "./Personagem.js"

const personagem = new Personagem("Alyx")
console.log(personagem.nome)
console.log(`O percentual de vida do ${personagem.nome} é: ` + personagem.vida)

personagem.sofreuDano(50)

console.log(`Agora, o seu percentual de vida é: ` + personagem.vida)

personagem.usouKitMedico()

console.log(`No fim da partida o percentual de vida do ${personagem.nome} é de: ` + personagem.vida)