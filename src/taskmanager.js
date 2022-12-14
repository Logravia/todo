import {Storage} from "./storage.js"

class TaskManager {
  #tasks;
  #projects;

  constructor (){
    this.storageWorks = Storage.storageAvailable();
    if (this.storageWorks && localStorage.length > 0){
      this.#tasks = Storage.getTasks();
      this.#projects = Storage.getProjects();
    } else {
      this.#tasks = [];
      this.#projects = ["Default"]
    }
  }
  add(task) {
    this.#tasks.push(task);
    if (this.storageWorks) {Storage.addTask(task);}
    console.log(localStorage)
  }
  remove(id){
    let location = this.#tasks.findIndex(task=>task.id == id);
    this.#tasks.splice(location,1);
    if (this.storageWorks) {Storage.removeTask(id);}
  }

  removeProject(id) {
    if (id == 0) {return}
    this.#projects.splice(id, 1);
    if (this.storageWorks) {Storage.updateProjectList(this.#projects);}
  }

  addProject(projectName="") {
    if (!this.#projects.find(proj=>projectName==proj)) {
      this.#projects.push(projectName);
    }
    if (this.storageWorks) {Storage.updateProjectList(this.#projects);}
  }

  projectArr() {
    return this.#projects;
  }

  toggleTask(id) {
    let task = this.#tasks.find(task=>task.id == id);
    task.toggleDone();
    if (this.storageWorks) {Storage.updateTask(task);}
  }

  getTask(id){
    return this.#tasks.find(task=>task.id == id);
  }

  updateTask (id, name, due, project) {
    let task = this.getTask(id);
    task.name = name;
    task.updateDate(due);
    task.project = project;
  }

  taskArray() {
    return this.#tasks;
  }
}

export {TaskManager}
