let index = 0;
const cartas = document.querySelectorAll('.carta');
const totalCartas = cartas.length;

function moverCarrusel(direccion) {
  // Remover la clase 'centrada' de la carta actual
  cartas[index].classList.remove('centrada');
  
  // Mover el índice
  index += direccion;

  // Si llegamos al final o al principio, volvemos al inicio o al final
  if (index >= totalCartas) {
    index = 0;
  } else if (index < 0) {
    index = totalCartas - 1;
  }

  // Agregar la clase 'centrada' a la nueva carta
  cartas[index].classList.add('centrada');

  // Mover las cartas
  const desplazamiento = -index * (cartas[0].offsetWidth + 30); // Ajustar el desplazamiento
  document.querySelector('.cartas').style.transform = `translateX(${desplazamiento}px)`;
}

// Inicializar la carta centrada
cartas[index].classList.add('centrada');
