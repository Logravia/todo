class TaskManager {
  #tasks;

  constructor (){
    this.#tasks = [];
  }
  add(task) {
    this.#tasks.push(task);
  }
  remove(id){
    let location = this.#tasks.findIndex(task=>task.id == id);
    this.#tasks.splice(location,1);
  }

  finishTask(id) {
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
