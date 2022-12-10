class Task {

  #done;
  constructor(name, due, project = "", priority="medium", done = false) {
    this.name = name;
    this.due = new Date(due);
    this.priority = priority;
    this.project = project
    this.#done = done;
  }

  get done() {
    return this.#done
  }

  toggleDone = ()=> {
    this.#done = !this.#done;
  }
}

export { Task }
