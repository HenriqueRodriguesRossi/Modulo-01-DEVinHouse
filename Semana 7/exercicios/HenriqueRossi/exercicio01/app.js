import Colaborador from "./colaborador.js"

const ada = new Colaborador("123.456.789-10", "Márcia Cavalcante", 2000)

console.log(ada)
ada.promover(50)
console.log(ada.salario)