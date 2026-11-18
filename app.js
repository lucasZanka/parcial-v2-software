const input = document.getElementById('nuevaTarea');
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', () => {
  const texto = input.value.trim();
  if (texto === '') {
    alert('Por favor, escribí una tarea antes de agregar.');
  return;
}

  const li = document.createElement('li');
  li.textContent = texto;

  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through';
  });

  lista.appendChild(li);
  input.value = '';
});