// Load saved tasks on page load
window.onload = loadTasks;

function addTask() {
    const taskInput = document.getElementById("newTaskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");
        const taskItem = createTaskElement(taskText);

        taskList.appendChild(taskItem);
        saveTasks();
        taskInput.value = ""; // Clear input field
    }
}

function createTaskElement(text, completed = false) {
    const li = document.createElement("li");
    li.className = completed ? "completed" : "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.onclick = () => toggleCompleted(li);

    // Wrap task text in a span for better control over line-through
    const taskText = document.createElement("span");
    taskText.className = "task-text"; // Add class for styling
    taskText.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = () => {
        li.remove();
        saveTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    return li;
}

function toggleCompleted(taskItem) {
    taskItem.classList.toggle("completed");
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    const taskList = document.querySelectorAll("#taskList li");

    taskList.forEach(task => {
        const taskText = task.querySelector("span").textContent;
        const completed = task.classList.contains("completed");
        tasks.push({ text: taskText, completed });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = ""; // Clear existing tasks

        tasks.forEach(task => {
            const taskItem = createTaskElement(task.text, task.completed);
            taskList.appendChild(taskItem);
        });
    }
}
