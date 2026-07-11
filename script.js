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
let tasks = [{titleTask: "hello", completed: false}];

function loadTask(){
    let loadTask = localStorage.getItem("tasks");
    tasks = JSON.parse(loadTask);
    tasks.forEach((task) => {
        listEl.insertAdjacentHTML("beforeend", `
            <div class="task">
                <li class="list-item">${task.titleTask}</li>
                <div class="task-btn-delete-complete">
                    <button class="delete-task-btn btn-list btn">delete</button>
                    <button class="complete-task-btn btn-list btn">complete</button>
                </div>
            </div>`);
    })
}
loadTask();
// add new task func
function addNewTask() {
    let titleTask;
    let newTaskTitle = inputEl.value.trim();
    if (newTaskTitle === "") return;
    titleTask = newTaskTitle;
    
    // add new task to tasks object
    tasks.push({
        titleTask: titleTask,
        completed: false
    })
    // Create new task to page
    listEl.insertAdjacentHTML("beforeend", `
            <div class="task">
                <li class="list-item">${titleTask}</li>
                <div class="task-btn-delete-complete">
                    <button class="delete-task-btn btn-list btn">delete</button>
                    <button class="complete-task-btn btn-list btn">complete</button>
                </div>
            </div>`);

    inputEl.value = "";
    listEl.classList.remove("complete");

    console.log(tasks)
    // save new task
    saveTask()
}
// save task to local storage
function saveTask(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
// add new task to list
inputBtnEl.addEventListener("click", addNewTask)
// add event delete and complete

listEl.addEventListener("click", (event) => {
    // find task element
    const taskElement = event.target.closest('.task');

    // delete
    if (event.target.classList.contains("delete-task-btn")) {
        if (taskElement) {
            taskElement.remove();
        }
    }

    // complete
    if (event.target.classList.contains("complete-task-btn")) {
        if (taskElement) {
            // add style complete task
            taskElement.classList.toggle("complete");
        }
    }
});


// delete all task
deleteAllTaskBtn.addEventListener("click", () => {
    listEl.innerHTML = "";
})

// complete all task
completeAllTaskBtn.addEventListener("click", () => {
    // select all element task
    const allTaskElements = document.querySelectorAll(".task");
    
    // use loop for add complete
    allTaskElements.forEach((task) => {
        task.classList.add("complete");
    });
});

// localStorage
