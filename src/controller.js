import {input, tasks, nav} from "./selectors.js"
import {Task} from "./task.js"
import {newTaskEdit} from "./taskbox.js"
import {filter} from "./filter.js"

class InputManager {
  constructor (taskManager, display) {
    this.taskManager = taskManager;
    this.display = display;
    this.toDisplay = "all";
  }

  processInput () {
    let name = input.nameInput.value;
    let due = input.dueInput.value;
    let proj = input.projectInput.value;
    let task = new Task(name, due, proj);
    this.taskManager.add(task);
  }

  processEdit (saveBtn){
    let container = saveBtn.parentElement;
    let name = container.querySelector("#name-edit").value;
    let due = container.querySelector("#name-edit").value;
    let project = container.querySelector("#name-edit").value;
    let task = new Task(name, due, proj);
  }

  cleanUp () {
    this.display.clearTasks()
    let relevantTasks = filter[this.toDisplay](this.taskManager.taskArray())
    this.display.show(relevantTasks);
    this.setUpDel();
    this.setUpEdit();
    this.setUpCheckbox();
  }

  setUpFilterSelectors () {
    let dateSelectors = nav.querySelectorAll("li");
    dateSelectors.forEach(selector=>{
      selector.addEventListener("click", (e)=>{
        let id = e.currentTarget.id;
        this.toDisplay = id;
        this.cleanUp();
      })
    });
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

  setUpSaveButton (saveBtn) {
    saveBtn.addEventListener("click",(e)=>{
      let container = e.target.parentElement
      let id = e.currentTarget.dataset.id;
      let name = container.querySelector("#edit-name").value;
      let date = container.querySelector("#edit-date").value;
      let proj = container.querySelector("#edit-project").value;
      this.taskManager.updateTask(id, name, date, proj);
      this.cleanUp();
    })
  }

  setUpEditSpace (target, task) {
    target.replaceWith(newTaskEdit(task));
  }

  ongoingEdit() {
    return tasks.querySelector(".task-edit") !== null;
  }

  setUpEdit() {
    let editBtns = document.querySelectorAll(".editBtn");
    editBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let id = e.target.dataset.id;
        let container = tasks.querySelector("#t" + id)

        if (!this.ongoingEdit() && container.className == "task") {
          this.setUpEditSpace(container, this.taskManager.getTask(id))
          this.setUpSaveButton(document.querySelector("#save-edit"));
        } else if (this.ongoingEdit() && container.className == "task") {
          return; // trying to edit a second task
        } else {
          this.cleanUp(); // clicked edit on the same task
        }

      })
    })
  }

  setUp () {
    this.setUpFilterSelectors()
    this.setUpAddButton();
    this.cleanUp();
  }

}

export {InputManager}
