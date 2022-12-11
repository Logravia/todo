import {tasks} from "./selectors"
import {newTaskHTML} from "./taskbox.js"

class Display {
  clearTasks () {
    tasks.textContent = "";
  }

  show(taskList=[]) {
    taskList.forEach((task, id)=>{
      newTaskHTML(task, id);
    })
  }
}

export {Display}
