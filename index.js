function preencherDados() {
  const dados = document.querySelector('#paste__code textarea').value;

  // Expressões regulares para extrair os dados
  const telefoneRegex = /Celular\s*\n?\s*(\(\d{2}\)\s*\d{5}-\d{4})/;
  const emailRegex = /E-mail\s*\n?\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
  const cnpjRegex = /CNPJ\s*\n?\s*([\d]{2}\.[\d]{3}\.[\d]{3}\/[\d]{4}-[\d]{2})/;

  // Extraindo os dados
  const telefoneMatch = dados.match(telefoneRegex);
  const emailMatch = dados.match(emailRegex);
  const cnpjMatch = dados.match(cnpjRegex);

  // Verifica se encontrou os dados e extrai os valores
  const telefone = telefoneMatch ? telefoneMatch[1] : 'Não encontrado';
  const email = emailMatch ? emailMatch[1] : 'Não encontrado';
  const cnpj = cnpjMatch ? cnpjMatch[1] : 'Não encontrado';

  // Preencher os campos com os dados extraídos
  document.getElementById('telefone').value = telefone;
  document.getElementById('email').value = email;
  document.getElementById('cnpj').value = cnpj;
}

// Função para formatar dados e gerar a mensagem
function formatarTelefone() {
  let telefone = document.getElementById("telefone").value;
  let cnpj = document.getElementById("cnpj").value;
  let email = document.getElementById("email").value;
  let ticket = document.getElementById("ticket").value;
  let plano = document.getElementById("plano").value;
  let setor = document.getElementById("setor").value;

  // Remover caracteres não numéricos
  telefone = telefone.replace(/\D/g, "");
  cnpj = cnpj.replace(/\D/g, "");
  email = email.trim();
  ticket = ticket.trim();

  // Verificar se tem 11 dígitos para aplicar o formato de telefone celular
  if (telefone.length === 11) {
      telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else {
      telefone = "NA";
  }

  // Verificar se tem 14 dígitos, para aplicar o formato CNPJ
  if (cnpj.length === 14) {
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  } else {
    cnpj = "NA";
  }

  // Gerar a mensagem
  let mensagem = `Boa tarde!
Seller deseja um contato para: 
Transferencia para o time: ${setor}
Plano: ${plano}
CNPJ: ${cnpj}
E-mail: ${email}
Ticket Origem: ${ticket}
Ligar no telefone: ${telefone}

Obrigado, Pessoal!`;

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
  mostrarAviso("Texto copiado com sucesso!");
}

function mostrarAviso(mensagem) {
  // Cria o elemento de aviso
  const aviso = document.createElement("div");
  aviso.className = "aviso";
  aviso.textContent = mensagem;

  // Adiciona o aviso ao body
  document.body.appendChild(aviso);

  // Mostra o aviso com um pequeno atraso
  setTimeout(() => {
      aviso.classList.add("mostrar");
  }, 10);

  // Remove o aviso automaticamente após 2 segundos
  setTimeout(() => {
      aviso.classList.remove("mostrar");
      setTimeout(() => aviso.remove(), 300); // Remove o elemento do DOM após a transição
  }, 2000);
}

// Função para limpar os campos de telefone e mensagem
function limparCampos() {
  document.getElementById("telefone").value = ""
  document.getElementById("cnpj").value = "";
  document.getElementById("email").value = "";
  document.getElementById("ticket").value = "";
  document.getElementById("plano").value = "Começar";
  document.getElementById("setor").value = "Financeiro";
  document.getElementById("mensagem").value = "";
  
}