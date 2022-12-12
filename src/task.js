class Task {

  #done;
  constructor(name, due, project = "", priority="medium", done = false) {
    this.name = name;
    this.id = Date.now()
    this.due = this.due ? new Date(due) : new Date()
    this.priority = priority;
    this.project = project
    this.#done = done;
  }

  get done() {
    return this.#done
  }

  updateDate(strDate) {
    this.due = strDate ? new Date(strDate) : new Date();
  }

  toggleDone = ()=> {
    this.#done = !this.#done;
  }
}

export { Task }
