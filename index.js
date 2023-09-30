// Get DOM elements
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");

// Function to create a new task element
function createTaskElement(taskText) {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${taskText}</span>
        <button class="delete-task">Delete</button>
    `;
    return taskElement;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = "";
        attachTaskHandlers(taskElement);
    }
}

// Function to attach event handlers to a task
function attachTaskHandlers(taskElement) {
    const checkbox = taskElement.querySelector(".task-checkbox");
    const deleteButton = taskElement.querySelector(".delete-task");

    checkbox.addEventListener("change", function () {
        taskElement.querySelector(".task-text").classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        taskElement.remove();
    });
}

// Add event listener for adding tasks
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
