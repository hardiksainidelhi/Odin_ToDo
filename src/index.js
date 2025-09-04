import './style.css'
import {Project} from './Models/project.js'
import {Task} from './Models/task.js'
import DOMStuff from './Models/DOMstuff.js'


let a  = new Project('Sample Project','Hello world')
let b = new Task('Make bed','make the bed','3 jan 2025',2)
let c = new Task('Make bed2','make the bed','2 jan 2025',1)
let d = new Task('Make bed2','make the bed','2 jan 2025',3)
let e = new Task('Make bed3','make the bed','2 jan 2025',1)

a.addtask(b)
a.addtask(c)
a.addtask(d)
a.addtask(e)

let a2  = new Project('Toasties','Make toast')
let b2 = new Task('Make Toast','make the bed','1 jan 2025',2)
let c2 = new Task('Make Tost2','make the bed','2 jan 2025',1)
a2.addtask(b2)
a2.addtask(c2)

DOMStuff.displayProject(a2)

// setTimeout(()=>{
//     console.log("Hello")
//     DOMStuff.displayProject(a2)
// },2000)


DOMStuff.displayProject(a)

a.addtask(b)