class Task {

  #done;
  constructor(name, due, project = "", done = false, id=Date.now()) {
    this.name = name;
    this.id = id;
    this.due = new Date(due);
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

  toJSON() {
    let stringDate = JSON.stringify(this.due);
    let data = {name: this.name, id: this.id, due: stringDate,
            project: this.project, done: this.#done};
    return JSON.stringify(data);
  }

  static newFromJSON(j){
    j = JSON.parse(j);
    return new Task(j.name, JSON.parse(j.due), j.project, j.done, j.id);
  }
}

export { Task }
