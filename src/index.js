import './style.css'
import {Project} from './Models/project.js'
import {Task} from './Models/task.js'
import DOMStuff from './Models/DOMstuff.js'


function createProject(projectName,description){
    
    let project = new Project(projectName,description)
    let projectElemDOM = DOMStuff.createProjectListItem(project)
    projectElemDOM.classList.add('project_list_elem')
    
    projectElemDOM.addEventListener('click',() => {  
        DOMStuff.displayProject(project)
    })

    DOMStuff.PROJECT_LIST_DOM.appendChild(projectElemDOM)
    return project
}



function initializaApp(){
    DOMStuff.ADD_TASK_BUTTON.addEventListener("click",()=>{
        DOMStuff.populateTaskModal(Project.PROJECT_LIST)
        DOMStuff.displayTaskModal()
    })

    DOMStuff.SUBMIT_NEW_TASK_BUTTON.addEventListener('click',(e)=>{
        e.preventDefault()
        let taskDetails = DOMStuff.getTaskFormDetails()
        let project = Project.getProjectById(taskDetails.project)
        project.addTask(new Task(
            taskDetails.title,
            taskDetails.description,
            taskDetails.dueDate,
            parseInt(taskDetails.priority)
        ))
        DOMStuff.hideTaskModal()
        DOMStuff.displayProject(project)
    })
    DOMStuff.TASK_MODAL_CANCEL_BUTTON.addEventListener('click',(e)=>{
        e.preventDefault()
        DOMStuff.hideTaskModal()
    })

    DOMStuff.ADD_PROJECT_BUTTON.addEventListener('click',(e)=>{
        DOMStuff.displayProjectModal()
    })

    DOMStuff.PROEJCT_MODAL_SUBMIT_BUTTON.addEventListener('click',(e)=>{
        e.preventDefault()
        let projectDetails = DOMStuff.getProjectFormDetails()
        let project = createProject(
            projectDetails.title,
            projectDetails.description
        )
        DOMStuff.hideProjectModal()
        DOMStuff.displayProject(project)
    })

    DOMStuff.PROJECT_MODAL_CANCEL_BUTTON.addEventListener('click',(e)=>{
        e.preventDefault()
        DOMStuff.hideProjectModal()
    })



    
    let defaultProject = createProject(
        'Default Project ✌️',
        'A home for your on the go tasks.╰(*°▽°*)╯'
    )
    DOMStuff.displayProject(defaultProject)
}

initializaApp()
