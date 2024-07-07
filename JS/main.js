const taskInp = document.querySelector(".cr-item__write-task");
const crTaskBtn = document.querySelector(".cr-item__add-task");
const taskContain = document.querySelector(".task-list");

crTaskBtn.addEventListener("click", addTask(taskInp, taskContain));

taskInp.addEventListener("keydown", addTask(taskInp, taskContain));

document.addEventListener("click", dTask("task-list__delete"));
document.addEventListener("click", eddTask("task-list__edit"));

function dTask(clasNameDeletBtn) {
  return (e) => {
    if (e.target.classList.contains(clasNameDeletBtn)) {
      e.target.parentElement.remove();
    }
  };
}

function eddTask(clasNameEdditBtn) {
  return (e) => {
    if (e.target.classList.contains(clasNameEdditBtn)) {
      const itemWp = e.target.parentElement;

      let editOldValue = itemWp.querySelector("p").textContent;

      while (itemWp.children.length > 0) {
        itemWp.children[0].remove();
      }

      const edditHtml = `  <input
            type="text"
            class="cr-item__edit-task"
            value="${editOldValue}"
          />`;

      itemWp.insertAdjacentHTML("afterBegin", edditHtml);
      const inputNewTask = itemWp.querySelector("input");

      inputNewTask.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          itemWp.classList.remove("task-list__item_eddit");
          itemWp.querySelector(".cr-item__edit-task").remove();
          itemWp.insertAdjacentHTML(
            "afterBegin",
            `
                <p class="task-list__text">${(editNewValue =
                  inputNewTask.value)}</p>
                <button class="task-list__delete task-list__btn" >Delete</button>
                <button class="task-list__edit task-list__btn" >Edit</button>`
          );
        }
      });

      itemWp.classList.add("task-list__item_eddit");
    }
  };
}

function addTask(input, container) {
  return (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      if (!input.value) return;

      container.insertAdjacentHTML(
        "afterbegin",
        `
               <div class="task-list__item">
                <p class="task-list__text">${input.value}</p>
             
                <button class="task-list__delete task-list__btn" >Delete</button>
                <button class="task-list__edit task-list__btn" >Edit</button>
              </div>`
      );
      input.value = "";
    }
  };
}

// <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes">
// <label for="happy"></label>
