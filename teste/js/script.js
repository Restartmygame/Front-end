// Selecione os botões
const previousBtn = document.querySelector('.previous-page');
const nextBtn = document.querySelector('.next-page');

// Adicione eventos de clique aos botões
previousBtn.addEventListener('click', goBack);
nextBtn.addEventListener('click', goForward);

// Função que retorna à página anterior
function goBack() {
  window.history.back();
}

// Função que avança para a próxima página
function goForward() {
  window.history.forward();
}
