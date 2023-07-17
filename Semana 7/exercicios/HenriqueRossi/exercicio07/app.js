import Usuario from "./Usuario.js";

const formLogin = document.getElementById("form-login");
const campoEmail = document.getElementById("campo-email");
const campoSenha = document.getElementById("campo-senha");
const pMensagem = document.getElementById("mensagem");

const usuarios = [
  new Usuario("Henrique", "henrique@dih.br", "1234"),
  new Usuario("Matheus", "matheus@dih.br", "4321"),
];

console.log(usuarios);

function realizaLogin(evento) {
  evento.preventDefault();
  const email = campoEmail.value;
  const senha = campoSenha.value;

  const usuario = usuarios.find((usuario) => {
    return usuario.email === email;
  });

  if (usuario && usuario.autenticar(email, senha)) {
    pMensagem.innerHTML = `Olá, ${usuario.nome}!`;
    campoEmail.value = "";
    campoSenha.value = "";
  } else {
    pMensagem.innerHTML = "Credenciais inválidas!";
  }
}

formLogin.addEventListener("submit", realizaLogin);
