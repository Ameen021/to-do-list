function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.className = 'task';
      li.innerHTML = `
        <div>
          <strong>${taskInput.value}</strong><br>
          <small>${dateInput.value}</small>
        </div>
        <button onclick="removeTask(this)">X</button>
      `;
  
      li.addEventListener('click', function(event) {
        if (event.target.tagName !== 'BUTTON') {
          li.classList.toggle('completed');
        }
      });
  
      taskList.appendChild(li);
      taskInput.value = '';
      dateInput.value = '';
    }
  }
  
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  