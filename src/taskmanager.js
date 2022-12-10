import { isToday, isTomorrow, isThisWeek, isThisMonth} from 'date-fns'

class TaskManager {
  #tasks;

  constructor (){
    this.#tasks = [];
  }
  add(task) {
    this.#tasks.push(task);
  }
  remove(id){
    this.#tasks.splice(id,1);
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
}

export {TaskManager}
