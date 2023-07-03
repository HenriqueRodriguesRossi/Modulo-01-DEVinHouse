// Recuperar o resultado do localStorage
const operacao = localStorage.getItem("operacao")
const numero1 = localStorage.getItem("numero1");
const numero2 = localStorage.getItem("numero2")
const resultado = localStorage.getItem("resultado")

// Exibir informações na tag <h3>
document.getElementById("operacao").textContent = `A operação escolhida foi: ${operacao}`
document.getElementById("numero1").textContent = `O primeiro número é: ${numero1}`
document.getElementById("numero2").textContent = `O segundo número é: ${numero2}`
document.getElementById("resultado").textContent = `O resultado é: ${resultado}`