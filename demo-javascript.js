// Task object constructor
function Task(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
}

// Array to store tasks
const tasks = [];

// Function to add a new task
function addTask(title, description) {
    const taskId = tasks.length + 1;
    const newTask = new Task(taskId, title, description);
    tasks.push(newTask);
    return newTask;
}

// Function to update a task by ID
function updateTask(taskId, title, description) {
    const task = findTaskById(taskId);
    if (task) {
        task.title = title;
        task.description = description;
    }
}

// Function to delete a task by ID
function deleteTask(taskId) {
    const index = findTaskIndexById(taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

// Function to find a task by ID
function findTaskById(taskId) {
    return tasks.find(task => task.id === taskId);
}

// Function to find the index of a task by ID
function findTaskIndexById(taskId) {
    return tasks.findIndex(task => task.id === taskId);
}

// Function to display all tasks
function displayTasks() {
    console.log("Tasks:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}`);
    });
}

// Example usage
addTask("Task 1", "Description for Task 1");
addTask("Task 2", "Description for Task 2");
addTask("Task 3", "Description for Task 3");
displayTasks();

updateTask(2, "Updated Task 2", "Updated description for Task 2");
deleteTask(1);

console.log("\nAfter updates and deletions:");
displayTasks();
