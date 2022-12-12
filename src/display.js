import {tasks} from "./selectors"
import {newTaskHTML} from "./taskbox.js"

class Display {
  clearTasks () {
    tasks.textContent = "";
    tasks.innerHTML = "<h2>Tasks</h2>"
  }

  show(taskList=[]) {
    taskList.forEach((task)=>{
      newTaskHTML(task);
    })
  }

  highlightFilter(element) {
    element.classList.add("selected-filter")
  }

  flattenFilter(element) {
    element.classList.remove("selected-filter")
  }

}

export {Display}
