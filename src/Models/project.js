import {Task} from './task.js'
export class Project {

    static sortTasks(taskList){
        
    }

    static PROJECT_LIST = []

    static getProjectById(projectId){
        return Project.PROJECT_LIST.filter(p => p.id === projectId)[0]
    }


    constructor(title, description){
        this.id = crypto.randomUUID()
        this.title = title
        this.description = description
        this.tasks = []
        Project.PROJECT_LIST.push(this)
    }

    addtask(task){
        this.tasks.push(task)
    }

    getTasks(){
        return Task.sortTasks(this.tasks)
    }

}