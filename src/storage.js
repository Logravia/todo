import {Task} from "./task.js";

class Storage {

  static addTask(task) {
    localStorage["t" + task.id] = task.toJSON();
  }

  static updateTask(task) {
    this.addTask(task);
  }

  static removeTask(id) {
    localStorage.removeItem("t"+id);
  }


  static updateProjectList(projects){
    localStorage.projects = JSON.stringify(projects);
  }

  static taskKey(key) {
    return key[0] === "t";
  }

  static getTasks() {
    let tasks = [];
    Object.keys(localStorage).forEach(key => {
      if (this.taskKey(key)){
        let task = Task.newFromJSON(localStorage.getItem(key));
        tasks.push(task);
      }
    });
    return tasks;
  }

  static getProjects() {
    let projects = JSON.parse(localStorage.projects);
    if (projects instanceof Array) {
      return projects
    } else {
      return ["Default"]
    }
  }

  static storageAvailable(type="localStorage") {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch (e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
  }
}

export {Storage}
