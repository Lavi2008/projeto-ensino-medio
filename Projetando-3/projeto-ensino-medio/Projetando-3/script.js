// modal - parte dos formulários dos projetos
let cardEditando = null;
function abrirModal(card = null) {
  document.getElementById('modal').style.display = 'block';
  if(card) {
  cardEditando = card;
   document.getElementById('titulo').value = card.querySelector('.titulo').innerText;
   document.getElementById('descricao').value = card.querySelector('.descricao').innerText;
   document.getElementById('data-inicio').value = card.querySelector('.data-inicio').innerText;
   document.getElementById('previsao-termino').value = card.querySelector('.previsao-termino').innerText;
   document.getElementById('responsavel').value = card.querySelector('.responsavel').innerText;

   document.getElementById('salvarBtn').innerText = "Salvar Edição";
 } else {
   cardEditando = null;
   document.getElementById('titulo').value = '';
   document.getElementById('descricao').value = '';
   document.getElementById('data-inicio').value = '';
   document.getElementById('previsao-termino').value = '';
   document.getElementById('responsavel').value = '';

   document.getElementById('salvarBtn').innerText = "Salvar";
 }
}
function fecharModal() {
 document.getElementById('modal').style.display = 'none';
}
// criar um select no html para setar status, colocar id nele, e value nos options, no js pegar o select por id e verificar o value dele,
// colocar comando setAttribute na hora da construção o card para definir a cor dele  

function atualizarCor(){
  const emAndamento2 = document.getElementById('em-andamento2');
  const pendente2 = document.getElementById('pendente2')
  const concluida2 = document.getElementById('concluida2');
  const status2 = document.getElementById('status2');
  const novoCard2 = document.createElement('div');
  novoCard2.classList.add('projeto-card2');

  switch (status2){
    case "em-andamento2":
      novoCard2.setAttribute("style", "background-color: rgb(146, 10, 10);")
        break;
   
      case "em-andamento2":
          novoCard2.setAttribute("style", "background-color: rgb(255, 255, 0);")
      break;

      case "concluido2":
          novoCard2.setAttribute("style", "background-color: rgb(12, 128, 12);")
      break;
  }
}
function adicionarProjeto() {
 const titulo = document.getElementById('titulo').value.trim();
 const descricao = document.getElementById('descricao').value.trim();
 const dataInicio = document.getElementById('data-inicio').value.trim();
 const previsaoTermino = document.getElementById('previsao-termino').value.trim();
 const responsavel = document.getElementById('responsavel').value.trim();
 const statusProjeto = document.getElementById('status-projeto').value.trim();




 if(titulo === "") {
   alert("Por favor, insira um título.");
   return;
 }
 if(cardEditando) {
   cardEditando.querySelector('.titulo').innerText = titulo;
   cardEditando.querySelector('.descricao').innerText = descricao;
   cardEditando.querySelector('.data-inicio').innerText = dataInicio;
   cardEditando.querySelector('.previsao-termino').innerText = previsaoTermino;
   cardEditando.querySelector('.responsavel').innerText = responsavel;

   cardEditando = null;
 } else {
   const novoCard = document.createElement('div');
   novoCard.classList.add('projeto-card');

   switch (statusProjeto) {
      case "pendente":
          novoCard.setAttribute("style", "background-color: rgb(146, 10, 10);")
        break;
   
      case "em-andamento":
          novoCard.setAttribute("style", "background-color: rgb(255, 255, 0);")
      break;

      case "concluido":
          novoCard.setAttribute("style", "background-color: rgb(12, 128, 12);")
      break;
   }
   

   
   const tituloElem = document.createElement('div');
   tituloElem.classList.add('titulo');
   tituloElem.innerText = titulo;
   const descricaoElem = document.createElement('div');
   descricaoElem.classList.add('descricao');
   descricaoElem.innerText = descricao;
   const dataInicioElem = document.createElement('div');
   dataInicioElem.classList.add('data-inicio');
   dataInicioElem.innerText = dataInicio;
   const previsaoTerminoElem = document.createElement('div');
   previsaoTerminoElem.classList.add('previsao-termino');
   previsaoTerminoElem.innerText = previsaoTermino;
   const responsavelElem = document.createElement('div');
   responsavelElem.classList.add('responsavel');
   responsavelElem.innerText = responsavel;

   const btnEditar = document.createElement('button');
   btnEditar.innerText = 'Editar';
   btnEditar.onclick = () => abrirModal(novoCard);
   const btnExcluir = document.createElement('button');
   btnExcluir.innerText = 'Excluir';
   btnExcluir.onclick = () => novoCard.remove();
   novoCard.appendChild(tituloElem);
   novoCard.appendChild(descricaoElem);
   novoCard.appendChild(dataInicioElem);
   novoCard.appendChild(previsaoTerminoElem);
   novoCard.appendChild(responsavelElem);


   novoCard.appendChild(btnEditar);
   novoCard.appendChild(btnExcluir);
   const container = document.querySelector('.projetos-container');
   const botaoMais = document.querySelector('.projeto-add');
   container.insertBefore(novoCard, botaoMais);
 }
 fecharModal();
}

