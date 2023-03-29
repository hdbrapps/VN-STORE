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

// Mapa de teclas para comandos de controle remoto
const remoteKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  13: 'ok'
};

// Função para lidar com o evento de pressionar uma tecla
function handleKeyPress(event) {
  const keyCode = event.keyCode;
  
  // Verificar se a tecla pressionada está mapeada para um comando de controle remoto
  if (keyCode in remoteKeys) {
    const command = remoteKeys[keyCode];
    
    // Executar a ação correspondente ao comando
    switch (command) {
      case 'left':
        // ação para mover para a esquerda
        break;
      case 'up':
        // ação para mover para cima
        break;
      case 'right':
        // ação para mover para a direita
        break;
      case 'down':
        // ação para mover para baixo
        break;
      case 'ok':
        // ação para selecionar o item
        break;
    }
    
    // Impedir que o evento seja propagado para outros elementos na página
    event.preventDefault();
    event.stopPropagation();
  }
}

// Adicionar um ouvinte de evento de teclado para o documento
document.addEventListener('keydown', handleKeyPress);

