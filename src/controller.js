import {input} from "./selectors.js"
import {Task} from "./task.js"

class InputManager {
  constructor (taskManager, display) {
    this.taskManager = taskManager;
    this.display = display;
    this.setting = undefined;
  }

  processInput () {
    let name = input.nameInput.value;
    let due = input.dueInput.value;
    let proj = input.projectInput.value;
    let task = new Task(name, due, proj);
    this.taskManager.add(task);
  }

  cleanUp () {
    this.display.clearTasks()
    this.display.show(this.taskManager.taskArray());
  }

  setUpAddButton () {
    input.addButton.addEventListener("click", ()=>{
      this.processInput();
      this.cleanUp()
    })
  }
}

export {InputManager}
