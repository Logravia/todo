class Task {

  #done;
  constructor(name, due, priority = "medium", project = "", done = false) {
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
