const usuarios = {
  nome: "Tamara",
  email: "tamara@email.com",
  senha: "12345",
};

const button = document.getElementsByTagName("button")[0];
const loginIncorreto = document.getElementsByTagName("p")[0];

function saudacao() {
  button.addEventListener("click", () => {
    const user = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;
    if (user === usuarios.email && pwd === usuarios.senha) {
      localStorage.setItem("usuarioLogado", usuarios.nome);
      window.location.href = "home.html";
    } else {
      loginIncorreto.innerText = "Usuário e/ou senha inválidos!";
    }
  });
}

saudacao();
