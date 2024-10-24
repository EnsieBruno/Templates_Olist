##Recebe telefone, e formata, para mensagens

let telefone = prompt("Digite o número de telefone:");

telefone = telefone.replace(/\D/g, "");

if (telefone.length === 11) {
  telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
} else {
  telefone = "Número inválido";
}

let mensagem = `
Boa tarde!

Me chamo Bruno, do time de Atenção da Olist. Gostaria de marcar uma ligação para conversarmos sobre o Olist ERP. Poderia nos enviar um telefone e horário de preferência para realizarmos o contato?

Tentamos ligar no telefone: ${telefone}, porém sem sucesso. Pode verificar se o telefone não tem bloqueios para números que não estão em sua agenda?

Ficamos à disposição!

Atenciosamente,
Equipe Suporte Olist Tiny!
`;

console.log(mensagem);
