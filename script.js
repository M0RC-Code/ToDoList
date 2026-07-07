// Select element from DOM
const inputEl = document.querySelector(".input-text");
const inputBtnEl = document.querySelector(".input-task-btn");
const listEl = document.querySelector(".list");
const listItemEl = document.querySelector(".list-item");

// add new task to list
inputBtnEl.addEventListener("click", () => {
    listEl.insertAdjacentHTML("beforeend", `
        <li class="list-item">${inputEl.value}</li>`);
    inputEl.value = "";
})