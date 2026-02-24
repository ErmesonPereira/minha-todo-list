// 1. Lógica para detectar a tecla "Enter"
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') return;

    const ul = document.getElementById('taskList');
    const li = document.createElement('li');

    // Criamos a estrutura da tarefa
    li.innerHTML = `
        <input type="checkbox" onclick="toggleComplete(this)">
        <span class="task-text">${taskText}</span>
        <span class="edit-btn" onclick="editTask(this)">Editar</span>
        <span class="delete-btn" onclick="this.parentElement.remove()">X</span>
    `;

    ul.appendChild(li);
    
    // 2. Limpa o texto e volta o cursor para o campo (Foco)
    input.value = '';
    input.focus(); 
}

// Função para riscar o texto
function toggleComplete(checkbox) {
    const span = checkbox.nextElementSibling;
    if (checkbox.checked) {
        span.classList.add('completed');
    } else {
        span.classList.remove('completed');
    }
}

// Função para editar
function editTask(button) {
    const span = button.previousElementSibling;
    const currentText = span.innerText;
    const newText = prompt("Edite sua tarefa:", currentText);
    
    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText;
    }
}