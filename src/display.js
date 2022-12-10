import {tasks} from "./selectors"
import {newTaskHTML} from "./taskbox.js"

class Display {
  clearTasks () {
    tasks.textContent = "";
  }

  show(taskList=[]) {
    taskList.forEach((task)=>{
      newTaskHTML(task);
    })
  }
}

export {Display}
