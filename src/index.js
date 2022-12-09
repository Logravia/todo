import "./style.css";
import {newTaskHTML} from "./taskbox.js"
import {Task} from "./task.js"

let task = new Task("Get milk", "today");
newTaskHTML(task);
