import {tasks, done} from "./selectors"
import {newTaskHTML} from "./taskbox.js"

class Display {
  clearTasks () {
    tasks.textContent = "";
    done.textContent = "";
    tasks.innerHTML = "<h2>Tasks</h2>"
    done.innerHTML = "<h2>Done</h2>"
  }

  show(taskList=[]) {
    taskList.forEach((task)=>{
      let taskHTML = newTaskHTML(task)
      if (!task.done) {
        tasks.appendChild(taskHTML);
      } else {
        done.appendChild(taskHTML);
      }
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
