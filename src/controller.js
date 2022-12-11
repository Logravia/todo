import {input, tasks} from "./selectors.js"
import {Task} from "./task.js"
import {newTaskEdit} from "./taskbox.js"

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
    this.setUpDel();
    this.setUpEdit();
    this.setUpCheckbox();
  }

  setUpAddButton () {
    input.addButton.addEventListener("click", ()=>{
      this.processInput();
      this.cleanUp()
    })
  }

  setUpDel () {
    let delBtns = document.querySelectorAll(".deleteBtn");
    delBtns.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
        let id = e.target.dataset.id;
        this.taskManager.remove(id);
        this.cleanUp();
      })
    })

  }

  setUpCheckbox () {
    let checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
        let id = e.target.dataset.id;
        this.taskManager.finishTask(id);
        this.cleanUp();
      })
    })

  }

  setUpEditSpace (target, task) {
    target.replaceWith(newTaskEdit(task));
  }

  setUpEdit () {
    let editBtns = document.querySelectorAll(".editBtn");
    editBtns.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
        let id = e.target.dataset.id;
        let container = tasks.querySelector("#t"+id)
        this.setUpEditSpace(container, this.taskManager.getTask(id))
      })
    })
  }

}

export {InputManager}
