class TaskManager {
  #tasks;
  #projects;

  constructor (){
    this.#tasks = [];
    this.#projects = ["Default"];
  }
  add(task) {
    this.#tasks.push(task);
  }
  remove(id){
    let location = this.#tasks.findIndex(task=>task.id == id);
    this.#tasks.splice(location,1);
  }

  removeProject(id) {
    if (id == 0) {return}
    this.#projects.splice(id, 1);
  }

  addProject(projectName="") {
    if (!this.#projects.find(proj=>projectName==proj)) {
      this.#projects.push(projectName);
    }
  }

  projectArr() {
    return this.#projects;
  }

  toggleTask(id) {
    let task = this.#tasks.find(task=>task.id == id);
    task.toggleDone();
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
