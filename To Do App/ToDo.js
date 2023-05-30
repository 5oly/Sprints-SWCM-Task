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

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = `
    <tr>
      <th>Task Name</th>
      <th>Priority</th>
      <th></th>
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

    const removeButtonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeTask(i);
    removeButtonCell.appendChild(removeButton);
    row.appendChild(removeButtonCell);

    taskList.appendChild(row);
  }
}
