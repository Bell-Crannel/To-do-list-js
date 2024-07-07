const taskInp = document.querySelector(".cr-item__write-task");
const crTaskBtn = document.querySelector(".cr-item__add-task");
const taskContain = document.querySelector(".task-list");

crTaskBtn.addEventListener("click", addTask(taskInp, taskContain));

taskInp.addEventListener("keydown", addTask(taskInp, taskContain));

document.addEventListener("click", taskControl("task-list__delete","task-list__edit"));

function taskControl(dBtn, eBtn) {
  return (e) => {
  
    if (e.target.classList.contains(dBtn)) {
      e.target.parentElement.remove()
    }else if(e.target.classList.contains(eBtn)){
      
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
