export class Task {

    static TASK_LIST = []

    static sortTasks(taskList){
        return taskList.sort((t1,t2) => {
            if (t1.dueDate.getTime() !== t2.dueDate.getTime()){
                console.log(t1.dueDate - t2.dueDate)
                return t1.dueDate - t2.dueDate 
            }
            return t1.priority - t2.priority}
        )
    }

    static getTaskById(taskId){
        return Task.TASK_LIST.filter(t => t.id === taskId)[0]
    }

    constructor(title, description, dueDate, priority){
        this.id = crypto.randomUUID()
        this.title = title
        this.description = description
        this.dueDate = new Date(dueDate)
        this.priority = priority
        
        Task.TASK_LIST.push(this)
    }

    setProject(Project){
        this.project = Project
    }

}