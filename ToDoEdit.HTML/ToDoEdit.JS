// Array to store the tasks
let tasks = [];

function addTask() {
  const taskNameInput = document.getElementById("taskNameInput");
  const priorityInput = document.getElementById("priorityInput");

  // Get the task name and priority values
  const taskName = taskNameInput.value.trim();
  const priority = parseInt(priorityInput.value);

  // Validate the task name and priority
  if (taskName === "" || isNaN(priority) || priority <= 0) {
    alert("Please enter a valid task name and priority.");
    return;
  }

  // Create a new task object
  const task = {
    name: taskName,
    priority: priority
  };

  // Add the task to the array
  tasks.push(task);

  // Clear the input fields
  taskNameInput.value = "";
  priorityInput.value = "";

  // Update the task list
  updateTaskList();
}

function removeTask(index) {
  // Remove the task from the array
  tasks.splice(index, 1);

  // Update the task list
  updateTaskList();
}

function editTask(index) {
  const taskList = document.getElementById("taskList");
  const row = taskList.rows[index + 1]; // Adding 1 to account for table header row

  // Get the current task details
  const task = tasks[index];

  // Convert the task row to input 
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
  const row = taskList.rows[index + 1]; // Adding 1 to account for table header row

  // Get the updated task details from the input fields
  const nameInput = row.cells[0].querySelector("input");
  const priorityInput = row.cells[1].querySelector("input");
  const updatedName = nameInput.value.trim();
  const updatedPriority = parseInt(priorityInput.value);

  // Validate the updated task name and priority
  if (updatedName === "" || isNaN(updatedPriority) || updatedPriority <= 0) {
    alert("Please enter a valid task name and priority.");
    return;
  }

  // Update the task in the array
  const task = tasks[index];
  task.name = updatedName;
  task.priority = updatedPriority;

  // Update the task list
  updateTaskList();
}

function cancelEdit(index) {
  // Update the task list without saving the changes
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

  // Add each task to the table
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


