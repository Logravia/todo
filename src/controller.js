import {input, tasks, nav} from "./selectors.js"
import {Task} from "./task.js"
import {newTaskEdit} from "./taskbox.js"
import {filter} from "./filter.js"

class InputManager {
  constructor (taskManager, display) {
    this.taskManager = taskManager;
    this.display = display;
    this.toDisplay = "all";
    this.projectsSelecte = "all-proj"
  }

  processInput () {
    let name = input.nameInput.value;
    if (name) {
      let due = input.dueInput.value;
      let proj = input.projectInput.value;
      let task = new Task(name, due, proj);
      this.taskManager.add(task);
    } else {
      alert("Please enter a name");
    }
  }

  cleanUp () {
    this.display.clearTasks()
    let relevantTasks = filter[this.toDisplay](this.taskManager.taskArray())
    this.display.show(relevantTasks, this.taskManager.projectArr());
    this.setUpDel();
    this.setUpEdit();
    this.setUpCheckbox();
    this.setUpTaskHover();
  }

  setUpFilterSelectors () {
    let dateSelectors = nav.querySelectorAll(".dates>ul>li");
    dateSelectors.forEach(selector=>{
      selector.addEventListener("click", (e)=>{
        let prevElement = document.querySelector("#"+this.toDisplay);
        this.display.flattenFilter(prevElement);
        this.display.highlightFilter(e.currentTarget);

        this.toDisplay = e.currentTarget.id;
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

  setUpNewProjbtn () {
    let delBtns = document.querySelectorAll("#new-proj");
    delBtns.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
        let project = document.querySelector("#new-project").value
        if (project == ""){return;}
        this.taskManager.addProject(project);
        this.cleanUp();
      })
    })

  }

  setUpCheckbox () {
    let checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
        let id = e.target.dataset.id;
        this.taskManager.toggleTask(id);
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
        let container = document.querySelector("#t" + id)
        console.log(e.target);

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

  setUpTaskHover = () => {
    let taskDescBoxes = tasks.querySelectorAll(".task-desc-box");
    taskDescBoxes.forEach(b=>{
      b.addEventListener("mouseenter", (e)=>{
        let description = e.currentTarget.querySelector(".task-desc")
        description.classList.remove("visuallyhidden");
      })
      b.addEventListener("mouseleave", (e)=>{
        console.log(e.currentTarget)
        let description = e.currentTarget.querySelector(".task-desc")
        description.classList.add("visuallyhidden");
      })
    })

  }

  getTasksDescriptionEl = (taskEl) => {

  }

  setUp () {
    this.setUpFilterSelectors()
    this.setUpAddButton();
    this.display.highlightFilter(nav.querySelector("#all"));
    this.setUpNewProjbtn()
    this.cleanUp();
  }

}

export {InputManager}
