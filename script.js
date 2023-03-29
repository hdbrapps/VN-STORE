const downloadButtons = document.querySelectorAll('.download-button');

downloadButtons.forEach(button => {
  button.addEventListener('click', () => {
    const url = button.getAttribute('data-url');
    const fileName = url.split('/').pop();
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    
    xhr.onload = () => {
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response);
      a.download = fileName;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);

      // Abre o aplicativo após o download ser concluído
      window.location.href = "app://" + fileName;
    };
    
    xhr.onprogress = (event) => {
      const progress = (event.loaded / event.total) * 100;
      const progressBar = button.parentNode.querySelector('.progress-bar');
      progressBar.style.width = `${progress}%`;
      if (progress === 100) {
        button.textContent = 'Instalar';
      }
    };
    
    xhr.send();

  });
});

document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 37: // Tecla esquerda
      // Ação correspondente ao movimento para a esquerda
      break;
    case 38: // Tecla para cima
      // Ação correspondente ao movimento para cima
      break;
    case 39: // Tecla direita
      // Ação correspondente ao movimento para a direita
      break;
    case 40: // Tecla para baixo
      // Ação correspondente ao movimento para baixo
      break;
    case 13: // Tecla Enter
      // Ação correspondente à seleção de um item
      break;
    default:
      // Outros casos podem ser tratados aqui
      break;
  }
});

