import {tasks} from "./selectors";
import { format } from 'date-fns';

const newTaskHTML = (task) =>{
  tasks.appendChild(newTaskDescBox(task));
}

const newTaskDescBox = (task) => {
  let taskDescBox = document.createElement("div");
  taskDescBox.className = "task-desc-box";
  taskDescBox.appendChild(newTaskBox(task));
  taskDescBox.appendChild(newTaskDesc(task));
  return taskDescBox;
}

const newTaskBox = (task) => {
  let container = document.createElement("div")
  container.className = "task-and-buttons";
  container.innerHTML = `
  <div class="task" id="t${task.id}">
    <p>${task.name}</p>
    <div class="checkbox" data-id=${task.id}></div>
  </div>

  <div class="delete-edit">
    <div class="deleteBtn button" data-id="${task.id}">D</div>
    <div class="editBtn button" data-id="${task.id}">E</div>
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

const newTaskEdit = (task) => {
  let taskEdit = document.createElement("div");
  taskEdit.className = "task-edit"
  taskEdit.innerHTML =
 `  <label for="edit-name">Name: </label>
    <input type="text" name="edit-name" id="edit-name" value="${task.name}" />
    <label for="edit-date">Due: </label>
    <input type="date" name="edit-date" id="edit-date" value="${format(task.due, "yyyy-MM-dd")}" />
    <label for="edit-project">Projects: </label>
    <select name="projects" id="edit-project">
      <option value="${task.project}">Area 51</option>
    </select>
    <div class="button" id="save-edit" data-id="task.id">S</div>`;
  return taskEdit;
}


export {newTaskHTML, newTaskEdit}
