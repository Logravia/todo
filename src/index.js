import "./style.css";
import {newTaskHTML} from "./taskbox.js"
import {Task} from "./task.js"
import {TaskManager} from "./taskmanager.js"

let task = new Task("Get milk", "2022-12-10");
newTaskHTML(task);

let manager = new TaskManager()
manager.add(task);
console.log(manager.weeksTasks())
