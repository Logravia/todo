import { isToday, isTomorrow, isThisWeek, isThisMonth, isPast} from 'date-fns'

class TaskManager {
  #tasks;

  constructor (){
    this.#tasks = [];
  }
  add(task) {
    this.#tasks.push(task);
  }
  remove(id){
    let location = this.#tasks.findIndex(task=>task.id == id);
    this.#tasks.splice(location,1);
  }

  finishTask(id) {
    let task = this.#tasks.find(task=>task.id == id);
    task.toggleDone();
  }

  getTask(id){
    return this.#tasks.find(task=>task.id == id);
  }

  taskArray() {
    return this.#tasks;
  }
  todaysTasks(){
    return this.#tasks.filter((task)=>isToday(task.due));
  }
  tomorrowsTasks() {
    return this.#tasks.filter((task)=>isTomorrow(task.due));
  }
  weeksTasks() {
    return this.#tasks.filter((task)=>isThisWeek(task.due));
  }
  monthsTasks() {
    return this.#tasks.filter((task)=>isThisMonth(task.due));
  }
  projectTasks(name) {
    return this.#tasks.filter((task)=>task.project == name);
  }
  overdueTasks() {
    return this.#tasks.filter((task)=>isPast(task.due));
  }
}

export {TaskManager}
