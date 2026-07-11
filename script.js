// Select element from DOM
const inputEl = document.querySelector(".input-text");
const inputBtnEl = document.querySelector(".input-task-btn");
const listEl = document.querySelector(".list");
const listItemEl = document.querySelector(".list-item");
const deleteAllTaskBtn = document.querySelector(".delete-all-task-btn");
const completeAllTaskBtn = document.querySelector(".complete-all-task-btn");
const taskEl = document.querySelector(".task")
const deleteTaskEl = document.querySelector(".delete-task-btn");
const completeTaskEl = document.querySelector(".complete-task-btn");

// create tasks object
let tasks = [{id: Date.now().toString(),titleTask: "hello", completed: false}];

function loadTask(){
    let loadTask = localStorage.getItem("tasks");
    if(loadTask){
        tasks = JSON.parse(loadTask)
    }else {
        tasks = [];
    }
    render()
}
loadTask();
// save task to local storage
function saveTask(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
function render(){
    listEl.innerHTML = "";
    tasks.forEach((task) => {
        listEl.insertAdjacentHTML("beforeend", `
            <div class="task ${task.completed ? "completed" : "notCompleted"}" data-id="${task.id}">
                <li class="list-item">${task.titleTask}</li>
                <div class="task-btn-delete-complete">
                    <button class="delete-task-btn btn-list btn">delete</button>
                    <button class="complete-task-btn btn-list btn">complete</button>
                </div>
            </div>`);
    })
}
// add new task func
function addNewTask() {
    let titleTask;
    let newTaskTitle = inputEl.value.trim();
    if (newTaskTitle === "") return;
    titleTask = newTaskTitle;
    
    // add new task to tasks object
    tasks.push({
        titleTask: titleTask,
        completed: false,
        id: Date.now().toString()
    })
    // Create new task to page
    render()

    inputEl.value = "";
    listEl.classList.remove("complete");
    console.log(tasks.id)
    console.log(tasks)

    saveTask()
}

// add new task to list
inputBtnEl.addEventListener("click", addNewTask)

// add event delete and complete
listEl.addEventListener("click", (event) => {
    // find task element
    const taskElement = event.target.closest('.task');
    console.log(event)
    // deleted
    if (event.target.classList.contains("delete-task-btn")) {
        if (taskElement) {
            const id = taskElement.dataset.id;
            tasks = tasks.filter((task => task.id !== id));
            saveTask()
            render()
        }
    }

    // completed
    if (event.target.classList.contains("complete-task-btn")) {
        if (taskElement) {
            const id = taskElement.dataset.id;
            const task = tasks.find(task => task.id === id);
            task.completed = !task.completed
            saveTask()
            render()
        }
    }
});


// delete all task
deleteAllTaskBtn.addEventListener("click", () => {
    tasks = [];
    saveTask();
    render();
})

// complete all task
completeAllTaskBtn.addEventListener("click", () => {    
    // use loop for add complete
    tasks.forEach((task) => {
        task.completed = true;
    })
    saveTask();
    render();
});

saveTask();
render();