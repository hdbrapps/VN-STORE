const appContainers = document.querySelectorAll('.app-container');
let focusedIndex = 0;

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'ArrowUp') {
    if (focusedIndex > 1) {
      appContainers[focusedIndex].classList.remove('focused');
      focusedIndex -= 2;
      appContainers[focusedIndex].classList.add('focused');
    }
  } else if (key === 'ArrowDown') {
    if (focusedIndex < appContainers.length - 2) {
      appContainers[focusedIndex].classList.remove('focused');
      focusedIndex += 2;
      appContainers[focusedIndex].classList.add('focused');
    }
  } else if (key === 'ArrowLeft') {
    if (focusedIndex % 2 === 1) {
      appContainers[focusedIndex].classList.remove('focused');
      focusedIndex -= 1;
      appContainers[focusedIndex].classList.add('focused');
    }
  } else if (key === 'ArrowRight') {
    if (focusedIndex % 2 === 0 && focusedIndex < appContainers.length - 1) {
      appContainers[focusedIndex].classList.remove('focused');
      focusedIndex += 1;
      appContainers[focusedIndex].classList.add('focused');
    }
  }
});

appContainers[focusedIndex].classList.add('focused');
