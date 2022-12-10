class Task {
  constructor(name, due, priority="medium", project="", done=false) {
    this.name = name;
    this.due = due;
    this.priority = priority;
    this.project = project
    this.done = done;
  }
}

export {Task}