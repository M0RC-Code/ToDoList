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

function addNewTask() {
    let task = []
    let newTask = inputEl.value;

    task.push(newTask)
    listEl.insertAdjacentHTML("beforeend", `
        <div class="task">
            <li class="list-item">${task}</li>
            <button class="delete-task-btn">delete</button>
            <button class="complete-task-btn">complete</button>
        </div>`);

    inputEl.value = "";
    listEl.classList.remove("complete");
}

// add new task to list
inputBtnEl.addEventListener("click", addNewTask)
// add event delete and complete
listEl.addEventListener("click", (event) => {
    // delete
    if (event.target.classList.contains("delete-task-btn")) {
        event.target.parentElement.remove();
    }

    // complete
    if (event.target.classList.contains("complete-task-btn")) {
        // complete style
        event.target.parentElement.querySelector(".list-item").style.textDecoration = "line-through";
    }
});


// delete all task
deleteAllTaskBtn.addEventListener("click", () => {
    listEl.innerHTML = "";
})

// complete all task
completeAllTaskBtn.addEventListener("click", () => {
    listEl.classList.add("complete");
})