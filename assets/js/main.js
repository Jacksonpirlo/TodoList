const input = document.getElementById('input');
const btn = document.querySelector('.btn-add');
const tareas = document.querySelector('.tareas');
const noTarea = document.querySelector('.tareas-no');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const texto = input.value;
        const li = document.createElement('li');
        const p = document.createElement('p');

    if (texto !== '') {
        p.textContent = texto;
        li.appendChild(p);
        li.appendChild(eliminar())
        tareas.appendChild(li);
        input.value = '';
    }
    noTarea.style.display = 'none';
});

function eliminar() {
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'X';
    btnEliminar.className = 'btn-eliminar';

    btnEliminar.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        tareas.removeChild(item);
        const items = document.querySelectorAll('li');
        if (items.length === 0) {
             noTarea.style.display = 'block';
        }
    });

    return btnEliminar;
}