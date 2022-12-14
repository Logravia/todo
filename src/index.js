import "./style.css";
import "@fortawesome/fontawesome-free/js/all.js"
import {TaskManager} from "./taskmanager.js"
import {InputManager} from "./controller.js"
import {Display} from "./display.js"

let manager = new TaskManager()
let display = new Display()
let input = new InputManager(manager, display);

input.setUp();
