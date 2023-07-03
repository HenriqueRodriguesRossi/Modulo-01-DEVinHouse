function calcular(event) {
  event.preventDefault();

  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);
  const operacao = document.getElementById("operacao").value;
  const spans = document.querySelectorAll(".span-validator")
  const inputs = document.querySelectorAll(".inputs")

  if (!numero1) {
    spans[0].style.display = "block"
    inputs[0].style.border = "2px solid #e43434"
  } else if (!numero2) {
    spans[1].style.display = "block"
    inputs[1].style.border = "2px solid #e43434"
  } else {
    let resultado;

    switch (operacao) {
      case "Soma":
        resultado = numero1 + numero2;
        break;
      case "Subtração":
        resultado = numero1 - numero2;
        break;
      case "Multiplicação":
        resultado = numero1 * numero2;
        break;
      case "Divisão":
        resultado = numero1 / numero2;
        break;
      case "Exponenciação":
        resultado = Math.pow(numero1, numero2);
        break;
      case "Raiz Quadrada":
        resultado = Math.sqrt(numero1);
        break;
    }

    // Armazenar o resultado no localStorage ou sessionStorage
    localStorage.setItem("resultado", resultado);
    localStorage.setItem("numero1", numero1);
    localStorage.setItem("numero2", numero2);
    localStorage.setItem("operacao", operacao);

    // Redirecionar para a página resultado.html
    window.location.href = "./calculadora/resultado/resultado.html";
  }
}