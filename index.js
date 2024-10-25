// Função para formatar telefone e gerar a mensagem
function formatarTelefone() {
  let telefone = document.getElementById("telefone").value;

  // Remover caracteres não numéricos
  telefone = telefone.replace(/\D/g, "");

  // Verificar se tem 11 dígitos para aplicar o formato
  if (telefone.length === 11) {
      telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else {
      telefone = "Número inválido";
  }

  // Gerar a mensagem
  let mensagem = `
  Boa tarde!

  Me chamo Bruno, do time de Atenção da Olist. Gostaria de marcar uma ligação para conversarmos sobre o Olist ERP. Poderia nos enviar um telefone e horário de preferência para realizarmos o contato?

  Tentamos ligar no telefone: ${telefone}, porém sem sucesso. Pode verificar se o telefone não tem bloqueios para números que não estão em sua agenda?

  Ficamos à disposição!

  Atenciosamente,
  Equipe Suporte Olist Tiny!
  `;

  // Exibir a mensagem no textarea
  document.getElementById("mensagem").value = mensagem;
}

// Função para copiar o conteúdo da textarea de mensagem
function copiarMensagem() {
  // Seleciona o elemento textarea com a mensagem
  let mensagemTexto = document.getElementById("mensagem");

  // Seleciona o texto do textarea
  mensagemTexto.select();
  mensagemTexto.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o texto para a área de transferência
  document.execCommand("copy");

  // Alerta ao usuário que o texto foi copiado
  alert("Mensagem copiada para a área de transferência!");
}

// Função para limpar os campos de telefone e mensagem
function limparCampos() {
  document.getElementById("telefone").value = ""; // Limpa o telefone
  document.getElementById("mensagem").value = ""; // Limpa a mensagem
}