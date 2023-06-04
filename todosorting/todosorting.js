let tasks = [];

function addTask() {
  const taskNameInput = document.getElementById("taskNameInput");
  const priorityInput = document.getElementById("priorityInput");

  const taskName = taskNameInput.value.trim();
  const priority = parseInt(priorityInput.value);

  if (taskName === "" || isNaN(priority) || priority <= 0) {
    alert("Please enter a valid task name and priority.");
    return;
  }

  const task = {
    name: taskName,
    priority: priority
  };

  tasks.push(task);

  taskNameInput.value = "";
  priorityInput.value = "";

  updateTaskList();
}

function removeTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

function editTask(index) {
  const taskList = document.getElementById("taskList");
  const row = taskList.rows[index + 1];

  const task = tasks[index];

  row.innerHTML = `
    <td><input type="text" class="edit-input" value="${task.name}"></td>
    <td><input type="number" class="edit-input" value="${task.priority}"></td>
    <td class="edit-buttons">
      <button onclick="saveTask(${index})">Save</button>
      <button onclick="cancelEdit(${index})">Cancel</button>
    </td>
  `;
}

function saveTask(index) {
  const taskList = document.getElementById("taskList");
  const row = taskList.rows[index + 1];

  const nameInput = row.cells[0].querySelector("input");
  const priorityInput = row.cells[1].querySelector("input");
  const updatedName = nameInput.value.trim();
  const updatedPriority = parseInt(priorityInput.value);

  if (updatedName === "" || isNaN(updatedPriority) || updatedPriority <= 0) {
    alert("Please enter a valid task name and priority.");
    return;
  }

  const task = tasks[index];
  task.name = updatedName;
  task.priority = updatedPriority;

  updateTaskList();
}

function cancelEdit(index) {
  updateTaskList();
}

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = `
    <tr>
      <th>Task Name</th>
      <th>Priority</th>
      <th>Actions</th>
    </tr>
  `;

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = task.name;
    row.appendChild(nameCell);

    const priorityCell = document.createElement("td");
    priorityCell.textContent = task.priority;
    row.appendChild(priorityCell);

    const actionsCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(i);
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => removeTask(i);
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);

    taskList.appendChild(row);
  }
}

function sortTasks() {
  tasks.sort((a, b) => a.priority - b.priority);
  updateTaskList();
}

