document.getElementById('add-task').addEventListener('click', function() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value.trim();
  
    if (taskText !== '') {
        var taskList = document.getElementById('tasks');
  
        var newTask = document.createElement('li');
        newTask.innerText = taskText;
  
        var actions = document.createElement('div');
        actions.className = 'actions';
  
        var completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.className = 'complete';
        completeButton.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });
  
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
  
        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        newTask.appendChild(actions);
        taskList.appendChild(newTask);
  
        taskInput.value = '';
    }
  });
  
  document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('add-task').click();
    }
  });
  