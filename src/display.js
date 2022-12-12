import {tasks, done, projects, input} from "./selectors"
import {newTaskHTML, newProjectLi, newOption} from "./taskbox.js"

class Display {
  clearTasks () {
    tasks.textContent = "";
    done.textContent = "";
    input.projectInput.innerHTML = `<option value="">--Please choose an option--</option>`;

    projects.textContent="";
    tasks.innerHTML = "<h2>Tasks</h2>"
    done.innerHTML = "<h2>Done</h2>"
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
    console.log(projectList);
    projectList.forEach(proj=>{
      projects.appendChild(newProjectLi(proj));
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
