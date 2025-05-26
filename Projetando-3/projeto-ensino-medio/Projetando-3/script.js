function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
  limparFormulario();
}

function limparFormulario() {
  document.getElementById("titulo").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("data-inicio").value = "";
  document.getElementById("previsao-termino").value = "";
  document.getElementById("responsavel").value = "";
  document.getElementById("status-projeto").value = "pendente";
}

function adicionarProjeto() {
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const dataInicio = document.getElementById("data-inicio").value;
  const previsaoTermino = document.getElementById("previsao-termino").value;
  const responsavel = document.getElementById("responsavel").value;
  const status = document.getElementById("status-projeto").value;

  if (!titulo || !descricao || !dataInicio || !previsaoTermino || !responsavel) {
    alert("Preencha todos os campos!");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("projeto-card");

  card.innerHTML = `
    <h3>${titulo}</h3>
    <p><strong>Descrição:</strong> ${descricao}</p>
    <p><strong>Início:</strong> ${dataInicio}</p>
    <p><strong>Previsão:</strong> ${previsaoTermino}</p>
    <p><strong>Responsável:</strong> ${responsavel}</p>
    <p><strong>Status:</strong> ${status}</p>
  `;

  document.getElementById("exibirProjetos").appendChild(card);
  fecharModal();
}
function atualizarCor() {
  const select = document.getElementById('status');
  const corStatus = document.getElementById('corStatus');
  const valor = select.value;

  let cor;

  switch (valor) {
    case 'pendente':
      cor = '#f39c12';  // Laranja (pendente)
      break;
    case 'em-andamento':
      cor = '#2980b9';  // Azul (em andamento)
      break;
    case 'concluida':
      cor = '#27ae60';  // Verde (concluída)
      break;
    default:
      cor = 'gray';
  }

  corStatus.style.backgroundColor = cor;
}
