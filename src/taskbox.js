import { format } from 'date-fns';

const newTaskHTML = (task) =>{
  return newTaskDescBox(task);
}

const newTaskDescBox = (task) => {
  let taskDescBox = document.createElement("div");
  taskDescBox.className = "task-desc-box";
  taskDescBox.appendChild(newTaskBox(task));
  taskDescBox.appendChild(newTaskDesc(task));
  return taskDescBox;
}

const checkedUnchecked = (done) => {
 if (done) {
  return '<i class="fa-regular fa-square-check fa-xl"></i>'
 } else {
   return  '<i class="fa-regular fa-square fa-xl"></i>'
 }
}

const newTaskBox = (task) => {
  let container = document.createElement("div")
  container.className = "task-and-buttons";
  container.innerHTML = `
  <div class="task" id="t${task.id}">
    <p>${task.name}</p>
    <button type="button" class="checkbox" data-id=${task.id}>${checkedUnchecked(task.done)}</button>
  </div>
  `

  if (!task.done) {
    container.innerHTML += `
  <div class="delete-edit">
    <button type="button" class="deleteBtn" data-id="${task.id}"> <i class="fa-solid fa-trash fa-xl"></i> </button>
    <button type="button" class="editBtn" data-id="${task.id}"> <i class="fa-solid fa-pen fa-xl"></i> </button>
  </div>`
  } else {
    container.innerHTML += `
  <div class="delete-edit">
    <button type="button" class="deleteBtn" data-id="${task.id}"> <i class="fa-solid fa-trash fa-xl"></i> </button>
  </div>`
  }

  return container;
}

const newTaskDesc = (task) => {
  let taskDesc = document.createElement("div")
  taskDesc.className = "task-desc visuallyhidden"

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
  taskEdit.id = "t" + task.id

  taskEdit.innerHTML =
 `  <label for="edit-name">Name: </label>
    <input type="text" name="edit-name" id="edit-name" value="${task.name}" />
    <label for="edit-date">Due: </label>
    <input type="date" name="edit-date" id="edit-date" value="${format(task.due, "yyyy-MM-dd")}" />
    <label for="edit-project">Projects: </label>
    <select name="projects" id="edit-project">
      <option value="${task.project}">Area 51</option>
    </select>
    <button type="button" id="save-edit" data-id="${task.id}"><i class="fa-solid fa-floppy-disk fa-xl"></i></button>`;
  return taskEdit;
}

const newProject = (name, id) => {
  let container = document.createElement("div");
  container.className = "proj-and-del";
  container.innerHTML = `
  <li>${name}</li>
  <button data-id="${id}" type="button"><i class="fa-solid fa-xmark"></i></button>
  `

  return container
}

const newOption = (projName) => {
  let option = document.createElement("option");
  option.textContent = projName;
  return option;
}


export {newTaskHTML, newTaskEdit, newProject, newOption}
