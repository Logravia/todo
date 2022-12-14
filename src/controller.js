import {input, tasks, nav, projects as projectList} from "./selectors.js"
import {Task} from "./task.js"
import {newTaskEdit} from "./taskbox.js"
import {filter} from "./filter.js"

class InputManager {
  constructor (taskManager, display) {
    this.taskManager = taskManager;
    this.display = display;
    this.dateFilter = "all";
    this.projectFilter = "Default"
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
    let relevantTasks = filter[this.dateFilter](this.taskManager.taskArray())
    relevantTasks = filter.project(relevantTasks, this.projectFilter);

    this.display.show(relevantTasks, this.taskManager.projectArr());
    this.setUpDel();
    this.setUpEdit();
    this.setUpCheckbox();
    this.setUpDelProjBtn();
    this.setUpTaskHover();
    this.setUpProjectSelectors();
    this.display.highlightFilter(projectList.querySelector("#"+this.projectFilter));
  }

  setUpDateSelectors () {
    let dateSelectors = nav.querySelectorAll(".dates>ul>li");
    dateSelectors.forEach(selector=>{
      selector.addEventListener("click", (e)=>{
        let prevElement = document.querySelector("#"+this.dateFilter);
        this.display.flattenFilter(prevElement);
        this.display.highlightFilter(e.currentTarget);

        this.dateFilter = e.currentTarget.id;
        this.cleanUp();
      })
    });
  }

  setUpProjectSelectors () {
    let projects = nav.querySelectorAll(".projects>ul li");
    projects.forEach(selector=>{
      selector.addEventListener("click", (e)=>{
        let prevElement = document.querySelector(".projects>ul li.selected-filter");
        this.display.flattenFilter(prevElement);

        this.projectFilter = e.currentTarget.textContent;
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

  setUpDelProjBtn = () => {
    let btns = document.querySelectorAll(".delProj");
    btns.forEach(btn=>{
      btn.addEventListener('click', e=>{
        let id = e.currentTarget.dataset.id
        this.taskManager.removeProject(id);
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
        let description = e.currentTarget.querySelector(".task-desc")
        description.classList.add("visuallyhidden");
      })
    })

  }

  setUp () {
    this.setUpDateSelectors()
    this.setUpAddButton();
    this.display.highlightFilter(nav.querySelector("#all"));
    this.setUpNewProjbtn()
    this.setUpDelProjBtn()
    this.setUpTaskHover();
    this.cleanUp();
  }

}

export {InputManager}
