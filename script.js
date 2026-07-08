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
            <div class="task-btn-delete-complete">
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
    // پیدا کردن نزدیک‌ترین المان با کلاس task
    const taskElement = event.target.closest('.task');

    // اگر دکمه حذف بود
    if (event.target.classList.contains("delete-task-btn")) {
        if (taskElement) {
            taskElement.remove();
        }
    }

    // اگر دکمه تکمیل بود
    if (event.target.classList.contains("complete-task-btn")) {
        if (taskElement) {
            // برای مثال اضافه کردن یک کلاس برای استایل دهی به تسک کامل شده
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
    listEl.classList.add("complete");
})