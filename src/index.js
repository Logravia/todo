import "./style.css";
import {TaskManager} from "./taskmanager.js"
import {InputManager} from "./controller.js"
import {Display} from "./display.js"


let manager = new TaskManager()
let display = new Display()

let input = new InputManager(manager, display);

input.setUpAddButton();
