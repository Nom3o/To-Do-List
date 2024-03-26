const addButton = document.querySelector('.btn');
const taskInput = document.querySelector('.task-input');
const tasksList = document.querySelector('#tasks');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        listItem.appendChild(checkbox);

        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        listItem.appendChild(textSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        listItem.appendChild(deleteButton);

        tasksList.appendChild(listItem);
        taskInput.value = '';

        deleteButton.onclick = function() {
            listItem.remove();
        };
    }
});

tasksList.addEventListener('click', function(e) {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        const textSpan = e.target.nextSibling;
        if (e.target.checked) {
            textSpan.style.textDecoration = 'line-through';
        } else {
            textSpan.style.textDecoration = 'none';
        }
    }
});