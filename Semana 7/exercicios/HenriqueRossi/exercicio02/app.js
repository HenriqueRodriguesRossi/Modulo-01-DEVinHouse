import Fatura from "./Fatura.js";

// Utilizando o método da classe
const melao = new Fatura(123, "Melão", 2, 3);
const valor = melao.obterValorTotal();
console.log(valor);

// Utilizando o método getter
const limao = new Fatura(334, "Limão", 5, 3);
console.log(limao.valorFinal);
