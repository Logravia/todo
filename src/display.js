import {tasks, done, projects, input} from "./selectors"
import {newTaskHTML, newProject, newOption} from "./taskbox.js"
import {format} from 'date-fns'

class Display {
  clearTasks () {
    tasks.textContent = "";
    done.textContent = "";
    input.projectInput.textContent = "";
    input.dueInput.value = format(new Date(), "yyyy-MM-dd");

    projects.textContent="";
    tasks.innerHTML = '<h2><i class="fa-solid fa-list"></i> Tasks</h2>'
    done.innerHTML = '<h2><i class="fa-solid fa-check-double"></i> Done</h2>'
  }

  show(taskList=[], projectList=[]) {
    taskList.forEach((task)=>{
      let taskHTML = newTaskHTML(task)
      if (!task.done) {
        tasks.appendChild(taskHTML);
      } else {
        done.appendChild(taskHTML);
      }
    })

    projectList.forEach((proj, id)=>{
      projects.appendChild(newProject(proj, id));
      input.projectInput.appendChild(newOption(proj));
    });
  }

  highlightFilter(element) {
    element.classList.add("selected-filter")
  }

  flattenFilter(element) {
    element.classList.remove("selected-filter")
  }

}

export {Display}
