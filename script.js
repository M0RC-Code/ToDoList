// Select element from DOM
const inputEl = document.querySelector(".input-text");
const inputBtnEl = document.querySelector(".input-task-btn");
const listEl = document.querySelector(".list");
const listItemEl = document.querySelector(".list-item");
const deleteTaskBtn = document.querySelector(".delete-task-btn");
const completeTaskBtn = document.querySelector(".complete-task-btn");

// add new task to list
inputBtnEl.addEventListener("click", () => {
    let newTask = inputEl.value;
    listEl.insertAdjacentHTML("beforeend", `
        <li class="list-item">${newTask}</li>`);
    inputEl.value = "";
    listEl.classList.remove("complete");
})

// delete all task
deleteTaskBtn.addEventListener("click", () => {
    listEl.innerHTML = "";
})

// complete all task
completeTaskBtn.addEventListener("click", () => {
    listEl.classList.add("complete");
})