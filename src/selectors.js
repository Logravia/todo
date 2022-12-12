const tasks = document.querySelector(".tasks")
const dates = document.querySelector(".dates")
const projects = document.querySelector(".projects")
const nav = document.querySelector("nav")
const done = document.querySelector(".done")

const input = {
  nameInput: document.querySelector("#task-name"),
  dueInput: document.querySelector("#due-date"),
  projectInput : document.querySelector("#project-select"),
  addButton: document.querySelector("#add")
}

export {tasks, dates, projects, nav, done, input};
