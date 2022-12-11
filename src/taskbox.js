import {tasks} from "./selectors";

const newTaskHTML = (task, id) =>{
  tasks.appendChild(newTaskDescBox(task, id));
}

const newTaskDescBox = (task, id) => {
  let taskDescBox = document.createElement("div");
  taskDescBox.className = "task-desc-box";
  taskDescBox.appendChild(newTaskBox(task, id));
  taskDescBox.appendChild(newTaskDesc(task));
  return taskDescBox;
}

const newTaskBox = (task, id) => {
  let container = document.createElement("div")
  container.className = "task-and-buttons";
  container.innerHTML = `
  <div class="task">
    <p>${task.name}</p>
    <div class="checkbox"></div>
  </div>

  <div class="delete-edit">
    <div class="deleteBtn button" data-id="${id}">D</div>
    <div class="editBtn button" data-id="${id}">E</div>
  </div>
  `

  return container;
}

const newTaskDesc = (task) => {
  let taskDesc = document.createElement("div")
  taskDesc.className = "task-desc"

  taskDesc.innerHTML = `
    <p class="description">Due: ${task.due}</p>
    <p class="priority">Priority: ${task.priority}</p>
    <p class="project">Project: ${task.project}</p>
  `
  return taskDesc;
}

export {newTaskHTML}
