function enviarMensagem() {
  alert("Sua mensagem foi enviada com sucesso!");
  return false; // Evita recarregar a página
}

// Atualiza o ano no rodapé automaticamente
document.addEventListener('DOMContentLoaded', function () {
  const spanAno = document.getElementById('ano');
  const anoAtual = new Date().getFullYear();
  spanAno.textContent = anoAtual;
});