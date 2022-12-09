import {tasks} from "./selectors";

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
  let taskBox = document.createElement("div");
  taskBox.className = "task";
  let taskText = document.createElement("p")
  taskText.textContent = task.name;
  taskBox.appendChild(taskText)

  let button = document.createElement("div")
  button.className = "button"
  taskBox.appendChild(button);
  return taskBox;
}

const newTaskDesc = (task) => {
  let taskDesc = document.createElement("div")
  taskDesc.className = "task-desc"

  let due = document.createElement("p")
  due.className = "description"
  let priority = document.createElement("p")
  priority.className = "priority"
  let project = document.createElement("p")
  project.className = "project"

  due.textContent = "Due: " + task.due;
  priority.textContent = "Priority: "+ task.priority;
  project.textContent = "Projects: " + task.project;

  taskDesc.appendChild(due)
  taskDesc.appendChild(priority)
  taskDesc.appendChild(project)

  return taskDesc;
}

export {newTaskHTML}
