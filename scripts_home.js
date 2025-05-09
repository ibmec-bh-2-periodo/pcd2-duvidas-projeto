const greeting = document.getElementsByTagName("h1")[0];
const usuarioLogado = localStorage.getItem("usuarioLogado");

if (usuarioLogado) {
  greeting.innerText = `Olá, ${usuarioLogado}`;
}
