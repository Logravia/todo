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
  todaysTask(){

  }
  tomorrowsTasks() {

  }
  weeksTasks() {

  }
  monthsTasks() {

  }
}
